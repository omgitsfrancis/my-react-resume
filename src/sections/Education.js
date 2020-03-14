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

function EducationItem({ data }) {
  const { school, location, degree, started, ended, bullets } = data;

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

export default function Education({ educationData }) {
  return (
    <>
      <SectionTitle title="Education" />
      {educationData.map(edu => (
        <EducationItem data={edu} />
      ))}
    </>
  );
}
