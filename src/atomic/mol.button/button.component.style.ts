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
  flex-direction: row;
  justify-content: center;
  background-color: ${props => colors[props.color]};
  border-radius: ${props => props.theme.border.radius.md};
  overflow: hidden;
  height: ${props => props.theme.spacing['xlg-2']};
  align-items: center;
`;

export const StyleButtonText = styled.Text`
  font-weight: bold;
  font-size: ${props => props.theme.font.size.h5};
  color: ${props => props.theme.font.colors.callToAction};
`;
