"use client";

import { Bike, Geometry } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

const BikeVizTool = ({ bikes }: { bikes: Bike[] }) => {
  const [currentManufacturer, setCurrentManufacturer] = useState<string | null>(
    null
  );
  const [currentModel, setCurrentModel] = useState<string | null>(null);
  const [currentSize, setCurrentSize] = useState<number | null>(null);

  const [comparisonBikes, setComparisonBikes] = useState<
    { size: Geometry; manufacturer: string; model: string }[]
  >([]);

  const PIXEL_SCALAR = 0.25;

  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (canvas && context) {
      context.fillStyle = "lightgray";
      context.fillRect(0, 0, canvas.width, canvas.height);

      comparisonBikes.forEach(({ size, manufacturer, model }, index) => {
        const wheelDiameter = 62.2 / PIXEL_SCALAR;
        const wheelRadius = wheelDiameter / 2;
        const commonStartX = wheelRadius + 50;
        const commonStartY = 600 - wheelRadius;

        context.beginPath();
        context.arc(commonStartX, commonStartY, wheelRadius, 0, Math.PI * 2);
        context.stroke();

        context.beginPath();
        context.arc(
          commonStartX + size.wheelbase / PIXEL_SCALAR,
          commonStartY,
          wheelRadius,
          0,
          Math.PI * 2
        );
        context.stroke();

        // starting at the common start, we can draw the chainstay
        const bbDrop = size.bottomBracketDrop / PIXEL_SCALAR;
        const chainStayLength = size.chainStayLength / PIXEL_SCALAR;

        // Pythagorean theorem to find the bottom bracket position with drop and chainstay length
        const bbX =
          commonStartX +
          Math.sqrt(Math.pow(chainStayLength, 2) - Math.pow(bbDrop, 2));
        const bbY = commonStartY + bbDrop;

        context.beginPath();
        context.moveTo(commonStartX, commonStartY);
        context.lineTo(bbX, bbY);
        context.stroke();

        // draw the seat tube with BB starting point
        const seatTubeLength = size.seatTubeLength / PIXEL_SCALAR;
        const seatTubeAngle = (size.seatTubeAngle * Math.PI) / 180;

        // r * cos(angle), r * sin(angle)
        const seatX = bbX + seatTubeLength * Math.cos(seatTubeAngle) * -1;
        const seatY = bbY + seatTubeLength * Math.sin(seatTubeAngle) * -1;

        context.beginPath();
        context.moveTo(bbX, bbY);
        context.lineTo(seatX, seatY);
        context.stroke();

        context.beginPath();
        context.moveTo(seatX, seatY);
        context.lineTo(commonStartX, commonStartY);
        context.stroke();

        // draw the top tube from seat to head tube
        const handlbarY = bbY - size.stack / PIXEL_SCALAR;
        const handlebarX = seatX + size.topTubeHorizontal / PIXEL_SCALAR;

        context.beginPath();
        context.moveTo(seatX, seatY);
        context.lineTo(handlebarX, handlbarY);
        context.stroke();

        const headTubeX =
          handlebarX +
          (size.headTubeLength / PIXEL_SCALAR) *
            Math.cos((size.headTubeAngle * Math.PI) / 180);
        const headTubeY =
          handlbarY +
          (size.headTubeLength / PIXEL_SCALAR) *
            Math.sin((size.headTubeAngle * Math.PI) / 180);

        // draw head tube
        context.beginPath();
        context.moveTo(handlebarX, handlbarY);
        context.lineTo(headTubeX, headTubeY);
        context.stroke();

        context.beginPath();
        context.moveTo(headTubeX, headTubeY);
        context.lineTo(
          commonStartX + size.wheelbase / PIXEL_SCALAR,
          commonStartY
        );
        context.stroke();

        context.beginPath();
        context.moveTo(bbX, bbY);
        context.lineTo(headTubeX, headTubeY);
        context.stroke();
      });
    }
  }, [comparisonBikes]);

  return (
    <>
      <canvas ref={ref} width={800} height={600} className="mt-8" />
      <select
        value={currentManufacturer || ""}
        onChange={(e) => {
          setCurrentManufacturer(e.target.value);
        }}
      >
        <option value="">Select Manufacturer</option>
        {Array.from(new Set(bikes.map((bike) => bike.manufacturer))).map(
          (manufacturer) => (
            <option key={manufacturer} value={manufacturer}>
              {manufacturer}
            </option>
          )
        )}
      </select>
      <select
        value={currentModel || ""}
        onChange={(e) => {
          setCurrentModel(e.target.value);
        }}
      >
        <option value="">Select Model</option>
        {bikes
          .filter((bike) => bike.manufacturer === currentManufacturer)
          .map((bike) => (
            <option key={bike.model} value={bike.model}>
              {bike.model}
            </option>
          ))}
      </select>
      <select
        value={currentSize || ""}
        onChange={(e) => {
          setCurrentSize(Number(e.target.value));
        }}
      >
        <option value="">Select Size</option>
        {bikes
          .filter((bike) => bike.model === currentModel)
          .flatMap((bike) =>
            bike.sizes?.map((size, index) => (
              <option key={index} value={size.frameSize}>
                {size.frameSize}
              </option>
            ))
          )}
      </select>
      <button
        onClick={() => {
          setCurrentManufacturer("");
          setCurrentModel("");
          setCurrentSize(0);

          const bikeToAdd = bikes.find((bike) => bike.model === currentModel);
          if (bikeToAdd) {
            const sizeToAdd = bikeToAdd.sizes.find(
              (size) => size.frameSize === currentSize
            );
            if (sizeToAdd) {
              setComparisonBikes([
                ...comparisonBikes,
                {
                  size: sizeToAdd,
                  manufacturer: bikeToAdd.manufacturer,
                  model: bikeToAdd.model,
                },
              ]);
            }
          }
        }}
      >
        Add Bike
      </button>
      <ul>
        {comparisonBikes.map((bike, index) => (
          <li key={index}>
            {bike.manufacturer} {bike.model} - {bike.size.frameSize}
            <button
              onClick={() => {
                setComparisonBikes(
                  comparisonBikes.filter((_, i) => i !== index)
                );
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BikeVizTool;
