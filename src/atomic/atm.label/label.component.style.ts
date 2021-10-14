import styled, { css } from 'styled-components/native';

type Color = 'primary' | 'secondary' | 'callToAction' | 'error';

interface StyleTextProps {
  color: Color;
}

const colors = {
  primary: css`
    ${props => props.theme.font.colors.primary}
  `,
  secondary: css`
    ${props => props.theme.font.colors.secondary}
  `,
  callToAction: css`
    ${props => props.theme.font.colors.secondary}
  `,
  error: css`
    ${props => props.theme.font.colors.error}
  `,
};

export const StyleText = styled.Text<StyleTextProps>`
  color: ${props => colors[props.color]};
  font-size: ${props => props.theme.font.size.h5};
`;
