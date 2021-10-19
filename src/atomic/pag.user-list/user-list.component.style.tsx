import styled from 'styled-components/native';

export const StylePageUserListContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const StyleUserCard = styled.View`
  background-color: ${props => props.theme.colors.primary}16;
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.border.radius.sm};
  margin: ${props => props.theme.spacing.sm} 0;
`;
