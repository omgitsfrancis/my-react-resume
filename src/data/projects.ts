import { ProjectData } from "../sections/Projects";

export const projectsData: ProjectData[] = [
  {
    projectName: "Web Scraper",
    bullets: [
      "Given a URL and CSS Selector, this application will scrape a web page and return text data that matches the CSS Selector.",
      "Client is hosted on Netlify and public API is hosted on Heroku.",
      "Created with TypeScript, React, and Node."
    ],
  },
  {
    projectName: "Lululemon Stock Checker",
    bullets: [
      "Created an Express server that would email me when a specific Lululemon product was available online.",
      "Modules used: axios for requests, cheerio for parsing HTML, and nodemailer to send emails.",
      "Deployed the server to the cloud using Azure App Service.",
    ],
  },
];
