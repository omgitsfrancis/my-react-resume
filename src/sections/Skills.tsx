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
  width: 100px;
`;

const SkillText = styled.Text`
  font-weight: light;
  font-size: 9px;
`;

export interface SkillData {
  category: string;
  categorySkills: string[];
}

function SkillItem(props: SkillData) {
  const { category, categorySkills } = props;
  return (
    <SectionWrapper>
      <Category>{category}</Category>
      <SkillText>{categorySkills.join(" • ")}</SkillText>
    </SectionWrapper>
  );
}

export default function Skills(props: {
  skills: SkillData[];
}) {
  const { skills } = props;
  return (
    <>
      <SectionTitle title="Skills" />
      {skills.map((skill, index: number) => (
        <SkillItem
          key={index}
          category={skill.category}
          categorySkills={skill.categorySkills}
        />
      ))}
    </>
  );
}
