import { ExperienceData } from "../sections/Experience";

export const experienceData: ExperienceData[] = [
  {
    company: "InnovaSystems International",
    location: "San Diego, CA",
    positions: [
      {
        title: "Software Engineer",
        started: "Dec 2019",
        ended: "Present"
      },
      {
        title: "Software QA Engineer",
        started: "Nov 2018",
        ended: "Dec 2019"
      }
    ],
    bullets: [
      "Developed and maintained projects using React, C#, .NET, and SQL Server.",
      "Contributed to the company's design system by creating styled React components.",
      "Worked in an agile environment, specifically Scrum.",
      "Built automated end to end tests from the ground up with Selenium (C#) and TestCafe."
    ]
  },
  {
    company: "Forward Slope Inc.",
    location: "San Diego, CA",
    positions: [
      {
        title: "Junior Software Engineer",
        started: "Aug 2017",
        ended: "Nov 2018"
      }
    ],
    bullets: [
      "Delivered monthly security patching scripts for isolated systems at various Marine and Naval sites.",
      "Automated the creation of security patching scripts with Python.",
      "Utilized security assessment tools such as Nessus, Security Content Automation Protocol (SCAP), and Security Technical Implementation Guides (STIGs) to perform vulnerability testing.",
      "Conducted Application Integration and Software Integration Testing (AI SIT) on various government networks (CANES, RDTE, SWAN).",
    ]
  },
  {
    company: "Koam Engineer Systems - KES inc",
    location: "San Diego, CA",
    positions: [
      {
        title: "Computer Systems Engineer",
        started: "Oct 2016",
        ended: "Aug 2017"
      }
    ],
    bullets: [
      "Developed automated functional tests on Naval Ship systems (CANES).",
      "Created tutorial documentation to provide training on the creation and execution of automated test.",
      "Managed all test assets by creating baseline images, backups, and documentation.",
      "Wrote daily testing reports to update installation technicians of system discrepancies."
    ]
  },
  {
    company: "Tapestry Solutions, a Boeing Company",
    location: "San Diego, CA",
    positions: [
      {
        title: "IT Technician",
        started: "Mar 2016",
        ended: "Oct 2016"
      },
      {
        title: "System Administrator Intern",
        started: "Jul 2015",
        ended: "Mar 2016"
      }
    ],
    bullets: [
      "Support and troubleshoot technological issues of a company with over 500 employees.",
      "Experience with Enterprise Microsoft technologies such as Active Directory, SCCM, IIS, and Exchange.",
      "Issued laptops, desktops, VoIP phones, and smart cards to new hires.",
      "Projects: Classroom in a box, Facility Maintenance Ticket Server, and HTTPS file server for customer downloads."
    ]
  }
];
