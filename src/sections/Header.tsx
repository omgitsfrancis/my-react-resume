import React from "react";
import styled from "@react-pdf/styled-components";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
`;
const Name = styled.Text`
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  line-height: 1.2;
`;
const Title = styled.Text`
  font-size: 10px;
  font-weight: light;
  text-align: center;
  line-height: 1.5;
  color: ${props => props.theme.accent};
`;
const ContactWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Contact = styled.Link`
  font-size: 10px;
  font-weight: light;
  margin: 0 5rem;
  text-decoration: dotted;
 `;

export interface HeaderData {
  name: string;
  title: string;
  contacts: {
    text: string;
    link?: string;
  }[];
}

export default function Header(props: HeaderData) {
  const { name, title, contacts } = props;

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Title>{title}</Title>
      <ContactWrapper>
        {contacts.map((contact, index) => (
          <>
          {index!==0 && <Contact>|</Contact>}
          <Contact key={index} src={contact.link}>{contact.text}</Contact>
          </>
        ))}

      </ContactWrapper>
    </Wrapper>
  );
}
