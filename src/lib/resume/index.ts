export const getResumeInfo = () => {
  return {
    basics: {
      name: "Nathan Tucker",
      email: "ntuckertriplet@gmail.com",
      phone: "319-333-8509",
      website: "http://njtucker.xyz/",
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
        location: "Des Moines, IA",
        website: "lockheedmartin.com",
        startDate: "2023-02-20",
        endDate: "",
        highlights: [
          "Researched and developed network-level protocols for devices to interact with, focusing on extreme modularity and adaptability",
          "Built on top of existing code frameworks to develop user interfaces in Lua and OpenGL",
          "Worked in an Agile environment, releasing often to customers for software review and revision",
          "Interfaced with external companies to ensure alignment of goals",
        ],
      },
      {
        company: "Lockheed Martin Skunkworks",
        position: "Software Engineer Associate",
        location: "Fort Worth, TX",
        website: "lockheedmartin.com",
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
        location: "San Antonio, TX",
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
        position: "Security Engineering Intern",
        location: "Iowa City, IA",
        website: "https://pearson.com/",
        startDate: "2020-06-01",
        endDate: "2020-08-14",
        highlights: [
          "Saved 10-15 hrs/week by making creating Django + Celery tool to centralize information from Acunetix, Blackduck, and Checkmarx",
          "Utilize AWS Console as well as AWS CLI to interact with and secure AWS instances, later used python scripts with boto3",
          "Automate security infrastructure and deployment with Terraform and Cloudformation templates",
          "Experiment with open source penetration testing tools and frameworks to exploit vulnerabilities",
        ],
      },
      {
        company: "NCS Pearson",
        position: "SecOps Intern",
        location: "Iowa City, IA",
        website: "https://pearson.com/",
        startDate: "2019-06-01",
        endDate: "2019-09-14",
        highlights: [
          "Create and utilize tools to automate mass scanning of Pearson assets, conduct manual vulnerability assessments based on the results",
          "Work to create policy and compliance rules, and mitigate threats and vulnerabilities against Pearson and its assets",
          "Use vulnerability and networking analysis tools such as OWASP ZAP Web App fuzzer, Burpsuite, Wireshark, and command line utilities",
          "Utilization of AWS console and tools to defend and secure EC2, S3, and virtual machines",
        ],
      },
      {
        company: "ISEAGE Research Lab",
        position: "Research Lab Assistant",
        location: "Ames, IA",
        website: "iseage.org",
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
        description:
          "A custom-made Ground Station, communication protocol, and avionics for a homemade and homebuilt drone.",
      },
      {
        name: "libdatastructures",
        type: "Personal Project",
        description:
          "A statically compiled, generic data structures library for me to use in later projects.",
      },
      {
        name: "SelecTunes",
        type: "School Project",
        description: "An app that allows the party to vote on the next song.",
      },
      {
        name: "QuestBoard",
        type: "School Project",
        description:
          "A kanban-style board with a gameified twist to increase fun and productivity.",
      },
      {
        name: "njtucker.xyz",
        type: "Personal Project",
        description:
          "This is the repo for my public site that you are viewing right now!",
      },
      {
        name: "LEGv8 Disassembler",
        type: "Class Project",
        description:
          "Python project to read in assembled and linked machine code and convert it back (as best as possible) to LEGv8 assembly, a slimmer version of ARM.",
      },
    ],
    education: [
      {
        institution: "Iowa State University",
        area: "Software Engineering",
        studyType: "Bachelor of Science",
        startDate: "2018-08-01",
        endDate: "2022-05-01",
        gpa: "3.34",
      },
    ],
    leadership: [
      {
        organization: "Iowa State Information Assurance Student Group",
        position: "Treasurer",
        startDate: "2020-08-18",
        endDate: "2022-05-20",
        highlights: [
          "Managing finances and procurement of club and ISEAGE lab purchases and procurements.",
        ],
      },
      {
        organization: "ISEAGE Research Lab",
        position: "Director",
        startDate: "2019-01-24",
        endDate: "2022-05-20",
        highlights: [
          "Organized development and goings of cyber defense of a team of 8 students",
          "Ensured on-time delivery of 5 competitions a year and large-scale overhaul of lab during summer downtime",
        ],
      },
    ],
    awards: [
      {
        title: "Best Domain",
        date: "2018-10-01",
        awarder: "ISU Hackathon",
        project: "Use Your Head!",
        highlights: [
          "Competed at Iowa State hackathon, utilizing Javascript (pico.js, matter.js) for facial and motion tracking",
          "Collaborated with a team of 3 to create the best website we could from the ground up in 48 hours",
        ],
      },
      {
        title: "First Place",
        date: "2019-04-01",
        awarder: "BSides Iowa Security Conference",
        project: "CTF Event",
        highlights: [
          "Competed against business professionals in a CTF challenge, more than doubling the points of second place",
          "Solved challenges to earn flags and gain points for the team including steganography, scripting, and network analysis",
        ],
      },
    ],
    skills: [
      {
        name: "Back End Development",
        level: "3+ years",
        keywords: [
          "Python",
          "Django",
          "Azure",
          "Springboot",
          "AWS",
          "C#",
          "ASP.NET",
          ".NET Core",
          "Git",
          "SQL",
          "MongoDB",
        ],
      },
      {
        name: "Front End Development",
        level: "1+ year",
        keywords: [
          "React JS",
          "Next JS",
          "Tailwind CSS",
          "AWS Amplify",
          "AWS Appsync",
          "AWS API Gateway",
        ],
      },
    ],
    languages: [
      {
        language: "English",
        fluency: "Native speaker",
      },
    ],
  };
};
