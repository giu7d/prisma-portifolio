import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const StyledBlock = styled.div`
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

const AnimatedBlock = animated(StyledBlock);

const generateNewPosition = (position = []) => {
  const rndIndex = Math.floor(Math.random() * position.length);
  const rndValue = Math.floor(Math.random() * 100) + "%";

  if (position[rndIndex] !== "auto") {
    position[rndIndex] = rndValue;
  }

  return position;
};

export default function Block({
  color,
  initialPositon,
  size,
  isAnimated,
  config = { duration: 8000 / 2 }
}) {
  const [top, right, left, bottom] = initialPositon;
  const [width, height] = size;
  const [position, setPosition] = useState(initialPositon);

  useEffect(() => {
    setPosition(value => generateNewPosition(value));
  }, [isAnimated]);

  const animation = useSpring({
    top: position[0],
    right: position[1],
    left: position[2],
    bottom: position[3],
    config
  });

  return (
    <AnimatedBlock
      style={animation}
      color={color}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      width={width}
      height={height}
    />
  );
}
