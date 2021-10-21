import styled from 'styled-components/native';

export const StyleTitle = styled.Text`
  color: ${props => props.theme.font.colors.secondary};
  font-size: ${props => props.theme.font.size.h1};
  font-weight: bold;
  margin: ${props => props.theme.spacing.lg} 0;
`;
