import styled from '@react-pdf/styled-components';

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
`;
export const LeftRightAnchor = styled(FlexRow)`
  justify-content: space-between;
`;
export const StyledLink = styled.Link`
  color: green;
`;  

export const ContentWrapper = styled.View`
  margin: 0;
`;

export const MainText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const Location = styled.Text`
  font-size: 10px;
  color: ${props => props.theme.accent};
`;

export const SubText = styled.Text`
  font-size: 10px;
  margin-bottom: 2px;
`;

export const Date = styled.Text`
  font-weight: light;
  font-size: 10px;
`;

export const BulletsWrapper = styled.View``;

export const BulletText = styled.Text`
  font-weight: light;
  font-size: 9px;
  margin-bottom: 2px;
`;
