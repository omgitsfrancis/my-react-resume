import React from 'react';
import styled from '@react-pdf/styled-components';

const SectionWrapper = styled.View`
  display:flex;
  flex-direction: row;
  margin-bottom: 2px;
`
const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  color: ${props => props.theme.accent};
`
const Line = styled.View`
  box-sizing: content-box;
  border-bottom-width: 1px;
  border-bottom-color: black;
  border-bottom-style: solid;
  flex-grow: 1;
  margin-left: 4px;
`

export default function SectionTitle(props: {title: string}) {
  const { title } = props;
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <Line/>
    </SectionWrapper>
  )
}