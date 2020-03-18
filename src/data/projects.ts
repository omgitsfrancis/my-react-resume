import { ProjectData } from "../sections/Projects";

export const projectsData: ProjectData[] = [
  {
    projectName: "Lululemon Stock Checker",
    bullets: [
      "Created an Express server that would email me when a specific Lululemon product was available online.",
      "Modules used: axios for requests, cheerio for parsing HTML, and nodemailer to send emails.",
      "Deployed the server to the cloud using Azure App Service."
    ]
  },
  {
    projectName: "React Resume",
    bullets: [
      "Took my resume template and turned it into a React application.",
      "Resume can be deployed as a static website or be exported to PDF.",
      "Application has been converted to Typescript."
    ]
  }
];
