const Home = () => {
  return (
    <div className="grid place-items-center text-center">
      <h1 className="text-5xl text-gray-600 p-10">Hello, I'm Nate!</h1>
      <p className="p-10 md:w-1/2">
        I am a software developer and aerospace enthusiast with experience in a
        wide set of technologies. From embedded development to network protocol
        development, all the way to Web Development in the Cloud! Currenty I am
        most interested in pursuing my High Power Rocket certifcations, making
        custom avionics for different UAVs, and exploring Guidance, Navigation,
        and Control of Air Vehicles and Rockets. I encourage you to checkout
        some of my adventures in my blog (actively working to add entries as I
        explore more) or check out my Resume with work-relevant experience.
        Thanks for your time!
      </p>
      <div className="text-left w-1/2">
        <ol className="relative border-l border-gray-200 mt-8 mb-8">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 mt-1.5 -left-1.5"></div>
            <time className="mb-1 text-sm text-gray-400 ">16 March 2024</time>
            <h3 className="text-lg font-semibold text-gray-900">
              Technician Class Licesnse (Amateur Radio)
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
              General and Amateur Class Licesnse (Amateur Radio)
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
};

export default Home;
