import styled from 'styled-components/native';

export const StyleInput = styled.TextInput`
  border: ${(props) => props.theme.colors.grey[600]};
  border-radius: ${(props) => props.theme.border.sm};
  padding: ${(props) => props.theme.spacing.sm};
  font-size: ${(props) => props.theme.font.size.h1};
`;
