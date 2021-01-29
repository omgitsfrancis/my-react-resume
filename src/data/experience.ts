import { ExperienceData } from "../sections/Experience";

export const experienceData: ExperienceData[] = [
  {
    company: "InnovaSystems International",
    location: "San Diego, CA",
    positions: [
      {
        title: "Software Engineer",
        started: "Dec 2019",
        ended: "Present",
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
  {
    company: "Forward Slope Inc.",
    location: "San Diego, CA",
    positions: [
      {
        title: "Junior Software Engineer",
        started: "Aug 2017",
        ended: "Nov 2018",
      },
    ],
    bullets: [
      "Developed monthly security patching scripts for isolated systems.",
      "Automated the creation of security patching scripts with Python.",
      "Utilized security assessment tools such as Nessus, Security Content Automation Protocol (SCAP), and Security Technical Implementation Guides (STIGs) to perform vulnerability testing.",
    ],
  },
  {
    company: "Koam Engineer Systems - KES inc",
    location: "San Diego, CA",
    positions: [
      {
        title: "Computer Systems Engineer",
        started: "Oct 2016",
        ended: "Aug 2017",
      },
    ],
    bullets: [
      "Developed automated functional tests for Naval Ship networks (CANES).",
      "Created tutorial documentation to provide training on the creation and execution of automated test.",
      "Managed all test assets by creating baseline images, backups, and documentation.",
      "Wrote daily testing reports to update installation technicians of system discrepancies.",
    ],
  },
  {
    company: "Tapestry Solutions, a Boeing Company",
    location: "San Diego, CA",
    positions: [
      {
        title: "IT Technician",
        started: "Mar 2016",
        ended: "Oct 2016",
      },
      {
        title: "System Administrator Intern",
        started: "Jul 2015",
        ended: "Mar 2016",
      },
    ],
    bullets: [
      "Support and troubleshoot technological issues of a company with over 500 employees.",
      "Issued laptops, desktop computers, VoIP phones, and smart cards to new hires.",
      "Utilized Microsoft enterprise technologies such as Active Directory, SCCM, IIS, and Exchange.",
    ],
  },
];
