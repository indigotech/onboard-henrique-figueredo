import styled, { css } from 'styled-components/native';

type Color = 'primary' | 'secondary' | 'callToAction' | 'error';

interface StyleCaptionProps {
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

export const StyleCaption = styled.Text<StyleCaptionProps>`
  color: ${props => colors[props.color]};
  font-size: ${props => props.theme.font.size.h5};
  margin-top: ${props => props.theme.spacing.xsm};
`;
