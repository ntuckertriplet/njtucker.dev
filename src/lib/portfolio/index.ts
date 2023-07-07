export const getPortfolio = () => {
  return [
    {
      title: "Ground Station",
      content:
        "Check out a blog post about my custom Ground Station. I wrote the User Interface in pygame to interact and communicate with air vehicles",
      link: "ground-station",
      bgimage: "react.png",
    },
    {
      title: "Custom Protocol",
      content:
        "In order to establish a Data Link between all of my potential air vehicles and rockets, I had to design a protocol that would be resilient and very slim",
      link: "custom-protocol",
      bgimage: "react.png",
    },
    {
      title: "Air Vehicle Firmware",
      content:
        "Fairly simple Arduino API interaction and also implementations of some very complex sensor processing. Includes concepts from Signal Processing",
      link: "vehicle-firmware",
      bgimage: "react.png",
    },
    {
      title: "Explorations in Signal Processing",
      content:
        "This is content testing out Kalman filtering, advanced state control, and all sorts of state design goodness",
      link: "signal-processing",
      bgimage: "react.png",
    },
  ];
};
