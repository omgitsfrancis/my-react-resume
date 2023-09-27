import { ExperienceData } from "../sections/Experience";

export const experienceData: ExperienceData[] = [
  {
    company: "Viasat",
    location: "Carlsbad, CA",
    positions: [
      {
        title: "Full Stack Software Engineer",
        started: "Jul 2021",
        ended: "Present",
      },
    ],
    bullets: [
      "The front-end subject matter expert for the team.",
      "Leader of the monthly front-end Community of Practice meetings.",
      "Successfully advocated for the modernization of the end-to-end testing solution within the organization. Moved from Selenium to Playwright",
      "Spearheaded the componentization effort with our React component library.",
      "Implemeted data visualization dashboards, tables, and graphs for efficient data presentation.",
      "Developed and maintained RESTful API endpoints using Node.js, facilitating seamless communication between front-end and back-end systems.",
      "Deployed and developed database updates to Snowflake using Squitch.",
      "Maintained flight detection ELT used for tracking and consolidating customer aircraft data.",
      "Created data integrity checks using AWS Lambda to monitor our data for any integrity issues.",
      "Supported production applications in an on-call rotation.",
    ],
  },
  {
    company: "InnovaSystems International",
    location: "San Diego, CA",
    positions: [
      {
        title: "Software Engineer",
        started: "Dec 2019",
        ended: "Jul 2021",
      },
      {
        title: "Software QA Engineer",
        started: "Nov 2018",
        ended: "Dec 2019",
      },
    ],
    bullets: [
      "Developed and maintained web applications written in React, .NET Core, and SQL Server.",
      "Created reusable React components on the design system team.",
      "Migrated legacy project (KnockoutJs/.NET Framework) to a more modern stack (React/.NET Framework)",
      "Created NodeJS proxy server with client cert support enabling the use of any automated test framework.",
      "Developed automated UI tests in C# (Selenium) and JavaScript (TestCafe).",
      "Mentor other testers and devs on automated UI testing.",
    ],
  },
];
