import styled from 'styled-components/native';

interface StyleCallToCationButtonProps {
  color: string;
}

export const StyleButton = styled.TouchableOpacity<StyleCallToCationButtonProps>`
  background-color: ${props => props.color};
  border-radius: ${props => props.theme.border.radius.md};
  overflow: hidden;
  padding: ${props => props.theme.spacing.md};
  align-items: center;
`;

export const StyleButtonText = styled.Text`
  font-weight: bold;
  color: ${props => props.theme.font.colors.callToAction};
`;
