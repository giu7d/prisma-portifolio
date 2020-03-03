import React from "react";
import styled from "styled-components";

const BauhausBlock = styled.div`
  position: absolute;
  background: ${props => props.color};
  opacity: 0.8;

  top: ${props => props.top};
  right: ${props => props.right};
  left: ${props => props.left};
  bottom: ${props => props.bottom};

  width: ${props => props.width};
  height: ${props => props.height};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default function BauhausBackground() {
  return (
    <Wrapper>
      <BauhausBlock
        color="#9D3BE0"
        left="0"
        bottom="0"
        width="200px"
        height="35%"
      />
      <BauhausBlock
        color="#9D3BE0"
        right="0"
        bottom="10%"
        width="275px"
        height="25%"
      />
      <BauhausBlock
        color="#f7921e"
        top="0"
        right="10%"
        width="225px"
        height="450px"
      />
      <BauhausBlock
        color="#f5347c"
        left="0"
        bottom="25%"
        width="330px"
        height="25%"
      />
      <BauhausBlock
        color="#f5347c"
        top="0"
        right="10%"
        width="200px"
        height="70%"
      />
      <BauhausBlock
        color="#9D3BE0"
        top="0"
        right="0"
        width="150px"
        height="35%"
      />
      <BauhausBlock
        color="#f7921e"
        top="0"
        left="25%"
        width="100px"
        height="250px"
      />
      <BauhausBlock
        color="#f7921e"
        left="35%"
        bottom="0"
        width="175px"
        height="580px"
      />
    </Wrapper>
  );
}
