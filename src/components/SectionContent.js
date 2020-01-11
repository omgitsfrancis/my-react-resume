import React from "react";
import styled from "@react-pdf/styled-components";
import { LeftRightAnchor } from "../components/Common";

const ContentWrapper = styled.View`
  margin: 0;
`;
const MainText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 2px;
`;
const Location = styled.Text`
  font-size: 10px;
  font-style: italic;
  color: ${props => props.theme.accent};
`;
const SubText = styled.Text`
  font-size: 10px;
  margin-bottom: 2px;
`;
const Date = styled.Text`
  font-weight: light;
  font-size: 10px;
`;
const BulletsWrapper = styled.View``;
const BulletText = styled.Text`
  font-weight: light;
  font-size: 9px;
  margin-bottom: 2px;
`;

export function SummarySection({ data }) {
  const SummaryText = styled.Text`
    font-size: 9px;
    font-weight: light;
    line-height: 1.25;
    margin-top: 4px;
  `;
  return <SummaryText>{data}</SummaryText>;
}

export function ExperienceSection({ data }) {
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

export function EducationSection({ data }) {
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

export function SkillsSection({ data }) {
  const { category, categorySkills } = data;

  const SectionWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2px;
  `;
  const Category = styled.Text`
    font-size: 12px;
    font-weight: bold;
    width: 120px;
  `;
  const Skills = styled.Text`
    font-weight: light;
    font-size: 9px;
  `;

  return (
    <SectionWrapper>
      <Category>{category}</Category>
      <Skills>{categorySkills.join(' • ')}</Skills>
    </SectionWrapper>
  );
}
