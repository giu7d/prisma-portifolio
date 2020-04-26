import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.dark};
  z-index: 10;

  scroll-snap-align: start;
`;

export default function Projects() {
  return <Wrapper>Hello World</Wrapper>;
}
