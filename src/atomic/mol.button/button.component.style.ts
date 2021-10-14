import styled, { css } from 'styled-components/native';

interface StyleCallToCationButtonProps {
  color: 'primary' | 'callToAction';
}

const colors = {
  primary: css`
    ${props => props.theme.colors.primary}
  `,
  callToAction: css`
    ${props => props.theme.colors.callToAction}
  `,
};

export const StyleButton = styled.TouchableOpacity<StyleCallToCationButtonProps>`
  background-color: ${props => colors[props.color]};
  border-radius: ${props => props.theme.border.radius.md};
  overflow: hidden;
  padding: ${props => props.theme.spacing.md};
  align-items: center;
`;

export const StyleButtonText = styled.Text`
  font-weight: bold;
  color: ${props => props.theme.font.colors.callToAction};
`;
