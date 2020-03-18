import React from "react";
import { Document, Font } from "@react-pdf/renderer";
import styled, { ThemeProvider } from "@react-pdf/styled-components";

// Components
import { StyledLink } from "./components/Common";

// Resume data
import { headerData, summary } from "./data/basic";
import { experienceData } from "./data/experience";
import { educationData } from "./data/education";
import { projectsData } from "./data/projects";
import { skillsData } from "./data/skills";

// Sections
import Header from "./sections/Header";
import Summary from "./sections/Summary";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

// Resume theme
import { theme } from "./data/theme";

// Fonts
import Montserrat from "./fonts/Montserrat.json";
Font.register(Montserrat);

const StyledPage = styled.Page`
  display: "flex";
  flex-direction: "col";
  font-family: "Montserrat";
  margin: 24px 0;
  color: ${props => props.theme.text};
`;

const Body = styled.View`
  margin: 0 60px;
`;

const Stamp = styled(StyledLink)`
  position: relative;
  bottom: -20px;
  font-size: 8px;
  text-align: center;
  margin: 0 10px;
  color: ${props => props.theme.accent};
`;

export const Resume = () => (
  <ThemeProvider theme={theme}>
    <Document title="FrancisResume" author="Francis Enriquez">
      <StyledPage size="A4">
        <Header name={headerData.name} title={headerData.title} contacts={headerData.contacts} />
        <Body>
          <Summary summary={summary} />
          <Experience experienceData={experienceData} />
          <Education educationData={educationData} />
          <Projects projectsData={projectsData} />
          <Skills skills={skillsData} />
        </Body>
        <Stamp src="https://github.com/omgitsfrancis/my-react-resume">Resume coded in React</Stamp>
      </StyledPage>
    </Document>
  </ThemeProvider>
);
