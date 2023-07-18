import HomePageCard from "@/components/home-page-card";
import { getPortfolio } from "@/lib/portfolio";

export default function Home() {
  const cardContent = getPortfolio();
  return (
    <div className="grid place-items-center text-center">
      <h1 className="text-5xl text-gray-600 p-10">Hello, I'm Nate!</h1>
      <p className="p-10 md:w-1/2">
        I am a software developer with experience in a wide set of technologies.
        From embedded development to network protocol development, all the way
        to Web Development in the Cloud! Currenty I am most interested in
        pursuing my High Power Rocket certifcations, making custom avionics for
        different UAVs, and exploring Guidance, Navigation, and Control of Air
        Vehicles and Rockets
      </p>

      <div className="flex flex-wrap justify-center p-10">
        {cardContent.map((c) => {
          return (
            <HomePageCard
              key={c.title}
              title={c.title}
              content={c.content}
              link={c.link}
            />
          );
        })}
      </div>
    </div>
  );
}
