export const getResumeInfo = () => {
  return {
    basics: {
      name: "Nathan Tucker",
      website: "http://njtucker.dev/",
      location: {
        city: "West Des Moines",
        countryCode: "US",
        region: "Iowa",
      },
      profiles: [
        {
          network: "Linkedin",
          username: "ntuckertriplet",
          url: "https://www.linkedin.com/in/nathan-tucker-a74286161/",
        },
        {
          network: "Github",
          username: "ntuckertriplet",
          url: "https://github.com/ntuckertriplet",
        },
      ],
    },
    work: [
      {
        company: "Wellmark BCBS",
        position: "Software Engineer",
        website: "https://wellmark.com",
        startDate: "2023-02-20",
        endDate: "",
        highlights: [
          "Support enterprise-wide authentication platforms and develop new, improved solutions",
          "Migrate existing software to the cloud in AWS, or reimplement as needed",
          "Worked in an Agile environment, releasing often to customers for software review and revision",
          "Created SSO SAML integrations for dozens of clients to utilize Wellmark as their SSO provider",
        ],
      },
      {
        company: "PrISUm Solar Car",
        position: "Suspension/Steering Dynamicist",
        website: "https://prisum.org",
        startDate: "2024-10-20",
        endDate: "",
        highlights: [
          "Design front suspension and steering system for performance and endurance vehicle",
          "Utilize additive and subtractive manufacturing methods",
          "Iterate design based on measured feedback and performance",
        ],
      },
      {
        company: "Lockheed Martin Skunkworks",
        position: "Software Engineer Associate",
        website:
          "https://www.lockheedmartin.com/en-us/who-we-are/business-areas/aeronautics/skunkworks.html",
        startDate: "2022-06-20",
        endDate: "2023-02-16",
        highlights: [
          "Researched and developed network-level protocols for devices to interact with, focusing on extreme modularity and adaptability",
          "Built on top of existing code frameworks to develop user interfaces in Lua and OpenGL",
          "Worked in an Agile environment, releasing often to customers for software review and revision",
          "Interfaced with external companies to ensure alignment of goals",
        ],
      },
      {
        company: "NCS Pearson",
        position: "SRE Intern/React Developer",
        website: "https://pearson.com/",
        startDate: "2021-06-01",
        endDate: "2021-10-01",
        highlights: [
          "Develop a full stack application in AWS with AWS Amplify, utilizing Lambda functions, Dynamo DB, all from a React TS app in ECS",
          "Enterprise unit testing and dev ops with Jira, Bitbucket, and pipelines to test/deploy code to the cloud",
          "Add new features to application following industry best practices and styles while adding security and reliability to the project",
        ],
      },
      {
        company: "NCS Pearson",
        position: "SecOps Intern",
        website: "https://pearson.com/",
        startDate: "2019-06-01",
        endDate: "2020-08-14",
        highlights: [
          "Saved 10-15 hrs/week by making creating Django + Celery tool to centralize information from Acunetix, Blackduck, and Checkmarx",
          "Create and utilize tools to automate mass scanning of Pearson assets, conduct manual vulnerability assessments based on the results",
          "Utilize AWS Console as well as AWS CLI to interact with and secure AWS instances, later used python scripts with boto3",
          "Automate security infrastructure and deployment with Terraform and Cloudformation templates",
          "Experiment with open source penetration testing tools and frameworks to exploit vulnerabilities",
          "Use vulnerability and networking analysis tools such as OWASP ZAP Web App fuzzer, Burpsuite, Wireshark, and command line utilities",
        ],
      },
      {
        company: "ISEAGE Research Lab",
        position: "Research Lab Assistant",
        website: "https://cdc.iseage.org",
        startDate: "2019-06-01",
        endDate: "2022-05-01",
        highlights: [
          "Directed multiple Cyber Defense Competitions for high school, community college, and national college students",
          "Developed intentionally vulnerable applications and environments for students to defend and attack",
          "Planned and executed unique scenarios for each competition",
          "Systems Administration with vCenter products and various networking setups",
        ],
      },
    ],
    projects: [
      {
        name: "Ground Station",
        type: "Personal Project",
        highlights: [
          "A custom-made Ground Station for a homemade and homebuilt drone and for amateur high-power rockets",
          "Built with pygame for UI, uses a DualSense Playstation controller as the user input",
          "Processes and displays status of Air Vehicle sent via a custom network protocol based on RTP",
        ],
        technologies: ["Python", "pygame", "UI/UX", "Packet design", "Arduino"],
      },
      {
        name: "Control Theory/State-Space Design",
        type: "Personal Project",
        highlights: [
          "A series of instruction and applied projects to experiment with and learn state-space design",
          "Applied in C/C++ programming in toy examples, and in real-world model rocketry and UAVs",
          "Developed/tuned Kalman Filters to ensure accurate spacial awareness given GPS, Accelerometer, and IMU sensors",
        ],
        technologies: ["C/C++", "Arduino", "I2C Bus", "SPI Bus"],
      },
      {
        name: "Air Vehicle Avionics",
        type: "Personal Project",
        highlights: [
          "Custom-designed and hand-soldered PCBs using COTS microcontrollers and sensors",
          "3D-printed avionics bays to fit in different size rockets and onto UAVs",
          "Arduino-compatible code written to communicate with sensors over I2C, SPI, and Serial over RF between AV and Ground Station",
          "Software written using concepts learned from State-Space Design and Methods",
        ],
        technologies: [
          "KiCad PCB Design",
          "Circuit Design",
          "Fusion 360",
          "Arduino",
          "C/C++",
          "I2C Bus",
          "SPI Bus",
          "Kalman Filtering",
        ],
      },
      {
        name: "libdatastructures",
        type: "Personal Project",
        highlights: [
          "A statically compiled, generic data structures library for me to use in later projects",
        ],
        technologies: [
          "C/C++",
          "Static library packaging/distribution",
          "Memory-management",
        ],
      },
      {
        name: "SelecTunes",
        type: "School Project",
        highlights: [
          "An app that allows the party to vote on the next song",
          "Built on top of ASP.NET Core in C# with PostgreSQL/Entity Framework as the backing database with a Redis cache layer",
        ],
        technologies: [
          "ASP.NET Core",
          "C#",
          "DB Admin",
          "PostgreSQL",
          "Redis",
          "Entity Framework",
        ],
      },
      {
        name: "QuestBoard",
        type: "School Project",
        highlights: [
          "A kanban-style board with a gameified twist to increase fun and productivity",
          "Built on top of ASP.NET Core in C# with PostgreSQL/Entity Framework as the backing database",
        ],
        technologies: [
          "ASP.NET Core",
          "C#",
          "DB Admin",
          "PostgreSQL",
          "Entity Framework",
          "JSON API Design",
        ],
      },
      {
        name: "njtucker.dev",
        type: "Personal Project",
        highlights: [
          "This is the repo for my public site that you are viewing right now!",
          "Built using TS/NextJS/Tailwind CSS and deployed on Vercel",
        ],
        technologies: [
          "Next JS",
          "React JS",
          "TypeScript",
          "JavaScript",
          "Material UI",
          "Tailwind CSS",
          "Vercel",
        ],
      },
      {
        name: "LEGv8 Disassembler",
        type: "School Project",
        highlights: [
          "Python project to read in assembled and linked machine code and convert it back (as best as possible) to LEGv8 assembly, a slimmer version of ARM.",
        ],
        technologies: [
          "ARM",
          "LEGv8",
          "Python",
          "Assembly",
          "Reverse Engineering",
        ],
      },
    ],
    education: [
      {
        institution: "Iowa State University",
        area: "Mechanical Engineering",
        studyType: "Bachelor of Science",
        startDate: "2025-01-10",
        endDate: "May 2026",
        gpa: "3.34",
      },
      {
        institution: "Iowa State University",
        area: "Software Engineering",
        studyType: "Bachelor of Science",
        startDate: "2018-08-01",
        endDate: "2022-05-01",
        gpa: "3.34",
      },
    ],
  };
};
