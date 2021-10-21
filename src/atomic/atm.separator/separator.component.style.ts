import styled, { css } from 'styled-components/native';

import { SeparatorSize } from './separator.component';

interface ContainerProps {
  size: SeparatorSize;
}

const sizes = {
  xsm: css`
    ${props => props.theme.spacing.xsm}
  `,
  sm: css`
    ${props => props.theme.spacing.sm}
  `,
  md: css`
    ${props => props.theme.spacing.md}
  `,
  lg: css`
    ${props => props.theme.spacing.lg}
  `,
  xlg: css`
    ${props => props.theme.spacing.xlg}
  `,
};

export const StyleSeparator = styled.View<ContainerProps>`
  height: ${props => sizes[props.size]};
`;
