import styled from '@react-pdf/styled-components';

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
`
export const LeftRightAnchor = styled(FlexRow)`
  justify-content: space-between;
`
export const StyledLink = styled.Link`
  color: green;
`