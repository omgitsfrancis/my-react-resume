import React from "react";
import styled from "@react-pdf/styled-components";
import SectionTitle from "../components/SectionTitle";

const SummaryText = styled.Text`
	font-size: 9px;
	font-weight: light;
	line-height: 1.25;
	margin-top: 4px;
`;

export default function Summary({summary}) {
  return (
    <>
      <SectionTitle title="Summary" />
      <SummaryText>{summary}</SummaryText>
    </>
  );
}
