import { ProjectData } from "../sections/Projects";

export const projectsData: ProjectData[] = [
  {
    projectName: "React Resume",
    bullets: [
      "This resume that you're reading was created using React and TypeScript.",
      "It can be deployed as a static website or be exported into a PDF for distribution.",
    ],
  },
  {
    projectName: "Apple Store Stock Checker",
    bullets: [
      "Created an Azure Functions app that would notify me when a specific Apple product was available online.",
      "Notifications are sent via SMS to specified phone numbers when product is available using Twilio.",
      "Created with Node.",
    ],
  },
  {
    projectName: "Web Scraper",
    bullets: [
      "Given a URL and CSS Selector, this application will scrape a web page and return text data that matches the CSS Selector.",
      "Client is hosted on Netlify and public API is hosted on Heroku.",
      "Created with TypeScript, React, and Node.",
    ],
  },
];
