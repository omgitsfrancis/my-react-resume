import React from "react";
import styled from "@react-pdf/styled-components";
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

function ExperienceItem({ data }) {
  const { company, positions, bullets, location } = data;

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

export default function Experience({ experienceData }) {
  return (
    <>
      <SectionTitle title="Experience" />
      {experienceData.map(item => (
        <ExperienceItem data={item} />
      ))}
    </>
  );
}
