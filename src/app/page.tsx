import Link from "next/link";

export default function Page() {
  return (
    <div className="grid place-items-center text-center">
      <h1 className="text-5xl text-gray-600 p-10">Hello, I'm Nate!</h1>
      <p className="md:w-1/2">
        I am a software developer, motorsports enthusiast, amateur rocketeer,
        and radio hobbyist with experience spanning embedded systems, network
        protocols, and web development in the cloud.
      </p>
      <p className="p-5 md:w-1/2">
        Currently, I'm exploring High Power Rocket certifications, building
        custom avionics for UAVs, and studying Guidance, Navigation, and Control
        (GNC) systems for rockets and air vehicles. I dream of applying my
        software expertise to cutting-edge motorsport technologies and getting
        hardware into space.
      </p>
      <p className="md:w-1/2">
        Check out my blog for stories about my technical and motorsport
        adventures (more entries coming soon!) or take a look at my{" "}
        <Link className="hover:underline" href="/resume">
          résumé
        </Link>{" "}
        for work-relevant experience. I have some writings around{" "}
        <Link className="hover:underline" href="/blog/l3/overview">
          designing and building a minimum diameter L3 rocket with fiberglass
          composites and custom avionics.
        </Link>
      </p>
      <div className="text-left w-1/2">
        <ol className="relative border-l border-gray-200 mt-8 mb-8">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 mt-1.5 -left-1.5"></div>
            <time className="mb-1 text-sm text-gray-400 ">16 March 2024</time>
            <h3 className="text-lg font-semibold text-gray-900">
              Technician Class License (Amateur Radio)
            </h3>
            <p className="mb-4 text-gray-500">
              Took (and passed) the Technician Class License exam for Amateur
              Radio. It grants me access to all VHF/UHF Amateur bands
              (frequencies above 30 MHz) and allows me to use COTS flight
              computers that require licensing.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 mt-1.5 -left-1.5"></div>
            <time className="mb-1 text-sm text-gray-400 ">13 April 2024</time>
            <h3 className="text-lg font-semibold text-gray-900">
              General and Amateur Class License (Amateur Radio)
            </h3>
            <p className="mb-4 text-gray-500">
              Took (and passed) the General Class License and Amateur Extra
              class exams for Amateur Radio. The General Class operator license
              authorizes privileges in all 29 amateur service bands. The
              privileges of an Amateur Extra Class operator license include
              additional spectrum in the HF bands.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
