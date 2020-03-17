import React from "react";
import SectionTitle from "../components/SectionTitle";
import {
  LeftRightAnchor,
  ContentWrapper,
  MainText,
  BulletText,
  BulletsWrapper
} from "../components/Common";

export interface ProjectData {
  projectName: string;
  bullets: string[];
}

function ProjectItem(props: ProjectData) {
  const { projectName, bullets } = props;

  return (
    <ContentWrapper>
      <LeftRightAnchor>
        <MainText>{projectName}</MainText>
      </LeftRightAnchor>
      <BulletsWrapper>
        {bullets.map(bullet => (
          <BulletText>• {bullet}</BulletText>
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
      {projectsData.map(project => (
        <ProjectItem
          projectName={project.projectName}
          bullets={project.bullets}
        />
      ))}
    </>
  );
}
