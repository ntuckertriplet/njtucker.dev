import CAD from "../../../../../public/blog/images/l3/CAD.png";
import Image from "next/image";
import OpenRocket from "../../../../../public/blog/images/l3/OpenRocket.png";

export default function Page() {
  return (
    <div className="space-y-5 m-6 lg:w-3/4 xl:w-1/2">
      <h1 className="text-4xl">
        Getting L3 Certified Part 1: Engineering Design
      </h1>
      <p>
        In the United States, there are 2 governing bodies for amateur rocketry:
        the{" "}
        <a className="hover:underline" href="https://www.nar.org">
          National Association of Rocketry (NAR)
        </a>{" "}
        and the{" "}
        <a className="hover:underline" href="https://www.tripoli.org">
          Tripoli Rocketry Association
        </a>
        . Both organizations have a certification program that allows rocketeers
        to use progressively larger and more powerful motors. The highest level
        of certification is Level 3 (L3). To get L3 certified, you must design,
        build, and fly a rocket that meets certain criteria. You can read the
        specific requirements in the{" "}
        <a className="hover:underline" href="https://www.tripoli.org/Level3">
          Tripoli L3 Certification Procedure
        </a>{" "}
        but the general process is as follows:
      </p>
      <ol className="list-decimal list-inside">
        <li>
          Design a rocket that meets the Tripoli L3 Certification Requirements
        </li>
        <li>Build the rocket</li>
        <li>
          Fly the rocket using a motor with an impulse of 5120 N/s or more and
          recover successfully
        </li>
      </ol>
      <h2 className="text-2xl text-bold">Project Planning</h2>
      <p>
        I don't have any deadlines to meet, there are no specific launch dates I
        am planning on attending and there are no projects outstanding that
        require an L3 certification. That being said, deadlines are important
        for engineering projects to plan out work. I would like to be L3
        Certified by Jan 1, 2026. While that depends largely on launch schedules
        of launch sites, it sets a reasonable manugacturing and testing schedule
        for me to be able to certify a flight.
      </p>
      <p>
        There's a big balancing game that goes on when designing and building an
        L3 rocket. The most simple of parameters are that it must be able to
        fly, it must be strong enough to be recovered and take the aggressive
        flight profile of an M-motor or greater, but it must have as few failure
        points as possible. On top of all of that, while there isn't a limit to
        spend as per the Tripoli guidelines, I certainly don't want to spend the
        same as a used car on a rocket. So, we can say that we need to build a
        strong, simple rocket with a reasonable budget. This means I could go
        for a lot of cheaper material, or less, stronger material. Wood and
        carboard versus fiberglass composites.
      </p>
      <p>
        I've seen a lot of success in subminimum rockets with fiberglass
        composites. I also have access to an amazing fiberglass composites shop
        at Iowa State where I can safely work on materials. For electrionics, I
        am going to use COTS options from Altus Metrum and my own flight
        computer for dual redundancy.
      </p>
      <h2 className="text-2xl text-bold">CAD and Simulations</h2>
      <p>
        I started by designing a rocket in CAD that would be close to the final
        product, but left room for change should the need arise. This is the
        rocket with 4 fins, a 98mm motor mount, and a 4" airframe. I used
        FreeCAD to design the rocket. I used OpenRocket to simulate the flight
        profile and make sure that the rocket would be stable and recoverable.
        Pictured next to the rocket is a reloadable motor case. I used this to
        set the length of the airframe to accomodate the motor and all recovery.
      </p>
      <Image src={CAD} alt="FreeCAD Rocket" className="mx-auto" />
      <p>
        To simulate the flight, I used OpenRocket. This made sure the flight
        would be stable and provided estimates for apogee, max mach number,
        Center of Pressure, and Center of Gravity measurements.
      </p>
      <Image src={OpenRocket} alt="OpenRocket Simulation" className="mx-auto" />
    </div>
  );
}
