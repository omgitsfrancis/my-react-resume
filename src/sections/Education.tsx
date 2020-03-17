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

export interface EducationData {
  school: string;
  location: string;
  degree: string;
  started: string;
  ended: string;
  bullets: string[];
}

function EducationItem(props: EducationData) {
  const { school, location, degree, started, ended, bullets } = props;

  return (
    <ContentWrapper>
      <LeftRightAnchor>
        <MainText>{school}</MainText>
        <Location>{location}</Location>
      </LeftRightAnchor>
      <LeftRightAnchor>
        <SubText>{degree}</SubText>
        <Date>
          {started} - {ended}
        </Date>
      </LeftRightAnchor>
      <BulletsWrapper>
        {bullets.map(bullet => (
          <BulletText>• {bullet}</BulletText>
        ))}
      </BulletsWrapper>
    </ContentWrapper>
  );
}

export default function Education(props: { educationData: EducationData[] }) {
  const { educationData } = props;
  return (
    <>
      <SectionTitle title="Education" />
      {educationData.map((edu: any) => (
        <EducationItem
          school={edu.school}
          location={edu.location}
          degree={edu.degree}
          started={edu.started}
          ended={edu.ended}
          bullets={edu.bullets}
        />
      ))}
    </>
  );
}
