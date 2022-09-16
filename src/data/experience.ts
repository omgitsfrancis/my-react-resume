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
      "Acted as the frontend subject matter expert for the team.",
      "Facilitator for the frontend Community of Practice meetings discussing frontend topics within our domain.",
      "Led the switch from using Selenium to Playwright for E2E tests.",
      "Contributed and maintained react component library that was used within our domain.",
      "Created RESTful API endpoints in Node/Express.",
      "Maintained flight detection ELT used for tracking and consolidating customer aircraft data.",
      "Developed and deployed database updates to Snowflake using Sqitch",
      "Developed data integrity checks using AWS Lambda to monitor our data for any abnormalities.",
      "Configured Snowflake dashboards to assist in investigation of data integrity issues.",
      "Participated in an on-call rotation to support production using the follow the sun model."
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
