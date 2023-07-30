import Image from "next/image";
import breadboard from "../../../../../public/blog/images/breadboard.png";

const Page = () => {
  return (
    <div className="space-y-5 m-6 lg:w-3/4 xl:w-1/2">
      <h1 className="text-3xl">Disclaimer</h1>
      <p>
        I have no idea what I'm doing when it comes to PCB design. While I think
        my designs are suitable for what I want it to be, none of this should be
        seen as a tutorial or a starting-off point. In my haste to get a PCB
        designed and manufactured, I tried to jump right into the deep end and
        design Wheatley. Wheatley was not the first name I chose, though. A
        friend suggested "Bread," a play on Breadboard, and at first I liked the
        idea of naming different iterations of the computer different names of
        grain, though I ended up landing on Wheatley.
      </p>
      <p> But I digress. </p>
      <h2 className="text-3xl">Version 0: Unnamed Breadboard Testbed</h2>
      <Image
        width={1000}
        height={0}
        src={breadboard}
        alt="breaboard used for testing"
      />
      <p>
        This board is for testing code on known-working hardware. Most, if not
        all, of my Control Theory is done on this board to eliminate variables
        and because it's very easy to see at-a-glance what orientation the code
        should <em>think</em> the board is in, versus reality. This does not
        allow me to plug 12V batteries to the board currently, but there are
        ways to do it, and it's plugged in via USB most of the time anyway for
        diagnostics over serial.
      </p>
      <h2 className="text-3xl">Version 1: Wheatley</h2>
      <p>
        Wheatley is the first version of my flight computer. Wheatley is meant
        to be able to control any and all vehicles I put it in. Fixed-wing
        drones, fin-stabilized/thrust-vectored rockets, rotary craft, gliders,
        anything. I bit off much more than I could chew for this one. I did not
        expect it to be a seamless process, and I did not think it would work on
        the first go. As of time of writing, I have yet to order the PCB. Though
        I have the schematic and a general idea of the PCB layout. I will update
        this blog as soon as the PCB is ordered and the soldering is done. It
        was designed in{" "}
        <a href="https://kicad.github.io" className="hover:underline">
          Kicad
        </a>
        , an{" "}
        <a
          href="https://gitlab.com/kicad/code/kicad"
          className="hover:underline"
        >
          open source
        </a>{" "}
        CAD program for PCB design and manufacturing.
      </p>
      <h4 className="text-xl font-bold">MIMXRT1062DVJ6B (ARM Cortex-M7)</h4>
      <p>
        My reasoning behind this processor is incredibly well-informed,
        thought-out, and came down to exactly the right processor for my use
        case. No other processor would have been sufficient in my goals.
      </p>
      <p>
        Ok that's not entirely true. There are plenty of other microprocessors
        that would have worked and do work in custom computers. If the
        MIMXRT1062DVJ6B processor identifier sounds familiar, it's because it's
        the processor that's used in the{" "}
        <a
          href="https://www.pjrc.com/store/teensy41.html"
          className="hover:underline"
        >
          Teensy 4.1 Arduino-Compatible Microcontroller by PJRC
        </a>
        . Why go with the Teensy Microcontroller? Familiarity with the Arduino
        platform, support for the board on the internet, and because PJRC very
        generously puts their{" "}
        <a
          href="https://www.pjrc.com/teensy/schematic.html"
          className="hover:underline"
        >
          board schematics online
        </a>
        . What this means for me, is that I can essentially replicate a Teensy
        board with some more sensors. See the testbed above. Code written on and
        for that platform can be seamlessly tranplanted onto a custom PCB. Same
        IDE, same code and pinouts, everything. For getting code tested and off
        the ground it makes so much sense, and I can narrow down issues to a
        hardware issue or a software issue. Controlling variables in stuff like
        this is critical.
      </p>
      <h4 className="text-xl font-bold">
        Bosch BNO055 (Accelerometer, Gyroscope, Magentometer, and Sensor-Fusion)
      </h4>
      <p>
        My experience with this sensor is not as much as others who have some
        very integrated and hyper-specialized code bases for it, but I can
        already tell it's going to do so much for me already. Aside from just
        getting the 9-DOF values, one of the big selling points for the sensor
        is the ability to grab the orientation in Quaternions directly. Rather
        than trying to derive the orientation from the different acceleration
        values combined with a little bit of trig, just use quaternions from the
        sensor directly. There's a real chance that the acceleration combined
        with some trig would have been used to generate quaternions to determine
        orientation anyway.
      </p>
      <p>
        Calibrating the sensor is a bit of a pain, but that only needs to be
        done once on startup and it is calibrated for the rest of operation.
        Calibration involves flailing around the sensor and letting it rest
        until the magic rocks inside are happy. You can also query the
        temperature from the sensor, but it also gets quite hot during
        operation, so...I guess you could check to see if the board is on fire?
      </p>
      <h4 className="text-xl font-bold">
        BMP280 (Barometric Pressure/Temperature)
      </h4>
      <p>
        I don't have a lot of explanation for this sensor other than it's a very
        popular, highly-supported, heavily-documented, and inexpensive sensor.
        It was popular when I started looking and wasn't too much, so I picked
        it. There might be better options out there, or less expensive options,
        but this is the one I chose when I set out to make a custom flight
        computer. It works just fine, and is another data point to determine the
        altitude and position of an air vehicle when combined with other
        sensors.
      </p>
      <h4 className="text-xl font-bold">Adafruit GPS</h4>
      <p>
        So this one is kind of breaking the testbed rules. This GPS is not the
        one on the final PCB. I put the least amount of stake in the GPS to be
        able to tell me where the air vehicle is at any point in time, and
        because of that, it has the least amount of dedicated code. Most of the
        GNSS data is identical across GPS choices as well, so while the I
        <sup className="font-features sups">2</sup>C query might differ
        slightly, the data will likely not.
      </p>
    </div>
  );
};

export default Page;
