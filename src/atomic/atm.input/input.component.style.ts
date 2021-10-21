import styled from 'styled-components/native';

export const StyleInput = styled.TextInput`
  border: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.border.size.sm};
  padding: ${props => props.theme.spacing.xsm};
  font-size: ${props => props.theme.font.size.h1};
`;
