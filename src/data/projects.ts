import { ProjectData } from "../sections/Projects";

export const projectsData: ProjectData[] = [
  {
    projectName: "React Resume",
    gitLink: "https://github.com/omgitsfrancis/my-react-resume",
    demoLink: "https://francis-enriquez-resume.netlify.app/",
    bullets: [
      "This resume that you're reading was created using React and TypeScript.",
      "It can be deployed as a static website or be exported into a PDF for distribution.",
    ],
  },
  {
    projectName: "Apple Store Stock Checker",
    gitLink: "https://github.com/omgitsfrancis/apple-stock-checker",
    bullets: [
      "Created an Azure Functions app that would notify me when a specific Apple product was available online.",
      "Notifications are sent via SMS to specified phone numbers when product is available using Twilio.",
      "Created with Node.",
    ],
  },
  {
    projectName: "Web Scraper",
    gitLink: "https://github.com/omgitsfrancis/web-scraper",
    demoLink: "https://web-scraper.netlify.app/",
    bullets: [
      "Given a URL and CSS Selector, this app will scrape a web page for text or data from a desired HTML attribute.",
      "Client is hosted on Netlify and public API is hosted on Heroku.",
      "Created with TypeScript, React, and Node.",
    ],
  },
];
