import React from "react";
import styled from "@react-pdf/styled-components";
import SectionTitle from "../components/SectionTitle";

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

const SkillText = styled.Text`
font-weight: light;
font-size: 9px;
`;

function SkillItem({ data }) {
    const { category, categorySkills } = data;
    return (
      <SectionWrapper>
        <Category>{category}</Category>
        <SkillText>{categorySkills.join(' • ')}</SkillText>
      </SectionWrapper>
    );
  }

export default function Skills({skills}) {
  return (
    <>
      <SectionTitle title="Skills" />
      {skills.map(skill => (
        <SkillItem data={skill} />
      ))}
    </>
  );
}
