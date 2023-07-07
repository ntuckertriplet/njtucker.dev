import HomePageCard from "@/components/home-page-card";

const cardContent = [
  {
    title: "Ground Station",
    content:
      "Check out a blog post about my custom Ground Station. I wrote the User Interface in pygame to interact and communicate with air vehicles",
    link: "ground-station",
  },
  {
    title: "Custom Protocol",
    content:
      "In order to establish a Data Link between all of my potential air vehicles and rockets, I had to design a protocol that would be resilient and very slim",
    link: "custom-protocol",
  },
  {
    title: "Air Vehicle Firmware",
    content:
      "Fairly simple Arduino API interaction and also implementations of some very complex sensor processing",
    link: "vehicle-firmware",
  },
  {
    title: "Explorations in Signal Processing",
    content:
      "This is content testing out Kalman filtering, advanced state control, and all sorts of state design goodness",
    link: "signal-processing",
  },
];

export default function Home() {
  return (
    <div className="grid place-items-center">
      <h1 className="text-5xl text-gray-600 p-10">Hello, I'm Nate!</h1>
      <p className="p-10">
        I am a software developer with experience in a wide set of technologies.
        From embedded development to network protocol development, all the way
        to Web Development in the Cloud!
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
