import React from "react";
import { Document, Font } from "@react-pdf/renderer";
import styled, { ThemeProvider } from "@react-pdf/styled-components";

// Components
import { StyledLink } from "./components/Common";
import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";
import {
  ExperienceSection,
  EducationSection,
  SummarySection,
  SkillsSection
} from "./components/SectionContent";

// Resume data
import { headerData, summary } from "./data/basic";
import { experienceData } from "./data/experience";
import { educationData } from "./data/education";
import { skills } from "./data/skills";

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
        <Header data={headerData} />
        <Body>
          <SectionTitle title="Summary" />
          <SummarySection data={summary} />

          <SectionTitle title="Experience" />
          {experienceData.map(exp => (
            <ExperienceSection data={exp} />
          ))}

          <SectionTitle title="Education" />
          {educationData.map(edu => (
            <EducationSection data={edu} />
          ))}

          <SectionTitle title="Projects" />
          <SectionTitle title="Skills" />
          {
            skills.map(skill => (
              <SkillsSection data={skill} />
            ))
          }
        </Body>
        <Stamp src="https://github.com/">Resume coded in React</Stamp>
      </StyledPage>
    </Document>
  </ThemeProvider>
);
