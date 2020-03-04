import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Block from "./Block";

const TIME = 8000;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export default function Background() {
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsAnimated(value => !value), TIME);
  }, [isAnimated]);

  return (
    <Wrapper>
      <Block
        color="#9D3BE0"
        initialPositon={["auto", "auto", "0%", "0%"]}
        size={["200px", "35%"]}
        isAnimated={isAnimated}
      />

      <Block
        color="#9D3BE0"
        initialPositon={["auto", "0%", "auto", "10%"]}
        size={["275px", "25%"]}
        isAnimated={isAnimated}
      />

      <Block
        color="#f7921e"
        initialPositon={["0%", "10%", "auto", "auto"]}
        size={["225px", "450px"]}
        isAnimated={isAnimated}
      />

      <Block
        color="#f5347c"
        initialPositon={["auto", "auto", "0%", "25%"]}
        size={["330px", "25%"]}
        isAnimated={isAnimated}
      />

      <Block
        color="#f5347c"
        initialPositon={["0%", "10%", "auto", "auto"]}
        size={["200px", "70%"]}
        isAnimated={isAnimated}
      />

      <Block
        color="#9D3BE0"
        initialPositon={["0%", "0%", "auto", "auto"]}
        size={["150px", "35%"]}
        isAnimated={isAnimated}
      />

      <Block
        color="#f7921e"
        initialPositon={["0%", "auto", "25%", "auto"]}
        size={["100px", "250px"]}
        isAnimated={isAnimated}
      />

      <Block
        color="#f7921e"
        initialPositon={["auto", "auto", "35%", "0%"]}
        size={["175px", "580px"]}
        isAnimated={isAnimated}
      />
    </Wrapper>
  );
}
