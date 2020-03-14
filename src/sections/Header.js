import React from 'react';
import styled from '@react-pdf/styled-components';
import { headerData } from '../data/basic'

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
`
const Name = styled.Text`
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  line-height: 1.2;
`
const Title = styled.Text`
  font-size: 10px;
  font-weight: light;
  text-align: center;
  line-height: 1.5;
  color: ${props => props.theme.accent};
`
const Contact =styled.Text`
  font-size: 10px;
  font-weight: light;
  text-align: center;
`
export default function Header({name, title, contacts}) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Title>{title}</Title>
      <Contact>{contacts.join('   |   ')}</Contact>      
    </Wrapper>
  )
}