import styled from 'styled-components/native';

interface ContainerProps {
  size: string;
}

export const StyleSeparatorContainer = styled.View<ContainerProps>`
  height: ${(props) => props.size};
`;
