import styled, { css } from 'styled-components/native';

type Size = 'sm' | 'md' | 'lg' | 'xlg';

interface ContainerProps {
  size: Size;
}

const sizes = {
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
