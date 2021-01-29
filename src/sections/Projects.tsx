import React from "react";
import SectionTitle from "../components/SectionTitle";
import { ContentWrapper, MainText, BulletText, BulletsWrapper, FlexRow, StyledLink } from "../components/Common";
import styled from "@react-pdf/styled-components";

export interface ProjectData {
  projectName: string;
  gitLink?: string;
  demoLink?: string;
  bullets: string[];
}

const ProjectLink = styled(StyledLink)`
  margin-top: 2px;
  margin-left: 4px;
`;

const Dash = () => <ProjectLink>-</ProjectLink>;

function ProjectItem(props: ProjectData) {
  const { projectName, bullets, gitLink, demoLink } = props;

  return (
    <ContentWrapper>
      <FlexRow>
        <MainText>{projectName}</MainText>
        {gitLink && (
          <>
            <Dash />
            <ProjectLink href={gitLink}>Git</ProjectLink>
          </>
        )}
        {demoLink && (
          <>
            <Dash />
            <ProjectLink href={demoLink}>Demo</ProjectLink>
          </>
        )}
      </FlexRow>
      <BulletsWrapper>
        {bullets.map((bullet: string, index: number) => (
          <BulletText key={index}>• {bullet}</BulletText>
        ))}
      </BulletsWrapper>
    </ContentWrapper>
  );
}

export default function Projects(props: { projectsData: ProjectData[] }) {
  const { projectsData } = props;
  return (
    <>
      <SectionTitle title="Projects" />
      {projectsData.map((project, index: number) => (
        <ProjectItem
          key={index}
          projectName={project.projectName}
          bullets={project.bullets}
          gitLink={project.gitLink}
          demoLink={project.demoLink}
        />
      ))}
    </>
  );
}
