import BikeVizTool from "@/components/bike-viz-tool";
import { getGeomtries } from "@/lib/geometry";

export default function Page() {
  return (
    <div>
      <BikeVizTool bikes={getGeomtries()} />
    </div>
  );
}
