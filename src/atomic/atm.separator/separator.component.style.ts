import styled, { css } from 'styled-components/native';

type Size = 'sm' | 'md' | 'lg' | '2-xl';

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
  '2-xl': css`
    ${props => props.theme.spacing['2-xl']}
  `,
};

export const StyleSeparator = styled.View<ContainerProps>`
  height: ${props => sizes[props.size]};
`;
