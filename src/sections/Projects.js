import React from "react";
import SectionTitle from "../components/SectionTitle";
import {
  LeftRightAnchor,
  ContentWrapper,
  MainText,
  BulletText,
  BulletsWrapper
} from "../components/Common";

function ProjectItem({ data }) {
  const { projectName, bullets } = data;

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
  )
}

export default function Projects({ projectsData }) {
  return (
    <>
      <SectionTitle title="Projects" />
      {projectsData.map(project => (
        <ProjectItem data={project} />
      ))}
    </>
  );
}