import React from "react";
import SectionTitle from "../components/SectionTitle";
import {
  LeftRightAnchor,
  ContentWrapper,
  MainText,
  Location,
  SubText,
  Date,
  BulletText,
  BulletsWrapper
} from "../components/Common";

export interface ExperienceData {
  company: string;
  positions: { title: string; started: string; ended: string }[];
  bullets: string[];
  location: string;
};

function ExperienceItem(props: ExperienceData) {
  const { company, positions, bullets, location } = props;
  return (
    <ContentWrapper>
      <LeftRightAnchor>
        <MainText>{company}</MainText>
        <Location>{location}</Location>
      </LeftRightAnchor>
      {positions.map(pos => (
        <LeftRightAnchor>
          <SubText>{pos.title.toUpperCase()}</SubText>
          <Date>
            {pos.started} - {pos.ended}
          </Date>
        </LeftRightAnchor>
      ))}
      <BulletsWrapper>
        {bullets.map(bullet => (
          <BulletText>• {bullet}</BulletText>
        ))}
      </BulletsWrapper>
    </ContentWrapper>
  );
}

export default function Experience(props: { experienceData: ExperienceData[] }) {
  const { experienceData } = props;

  return (
    <>
      <SectionTitle title="Experience" />
      {experienceData.map(item => (
        <ExperienceItem
          company={item.company}
          positions={item.positions}
          bullets={item.bullets}
          location={item.location}
        />
      ))}
    </>
  );
}
