import React, { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Brand from "components/Brand";
import Button from "components/Button";
import { Background } from "components/Bauhaus";
import { useSpring, animated } from "react-spring";

const AnimatedBrandTitle = animated(Brand.Title);
const AnimatedBrandDivider = animated(Brand.Divider);
const AnimatedBrandSubtitle = animated(Brand.Subtitle);

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Foreground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Main = styled.main`
  /* padding: ${({ theme }) => theme.spacing.large + "px"}; */
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 180px;
  grid-row-gap: ${({ theme }) => theme.spacing.xlarge + "px"};

  div {
    display: grid;
    align-items: center;
  }
`;

export default function MainScreen() {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  window.onscroll = () => setScrollPosition(window.scrollY);

  const theme = useContext(ThemeContext);

  const animationToLeft = useSpring({
    marginLeft: -scrollPosition / 10,
    config: {}
  });

  const animationToRight = useSpring({
    marginLeft: scrollPosition / 2,
    config: {}
  });

  return (
    <Wrapper>
      <Background />
      <Foreground>
        <Main>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              paddingLeft: theme.spacing.large
            }}
          >
            <AnimatedBrandTitle style={animationToLeft}>
              Pris
              <br />
              ma
            </AnimatedBrandTitle>
            <AnimatedBrandDivider style={animationToRight} />
            <AnimatedBrandSubtitle style={animationToRight}>
              Software
              <br />
              com
              <br />
              qualidade
            </AnimatedBrandSubtitle>
          </div>

          <div style={{ padding: `0 ${theme.spacing.large}px` }}>
            <Button
              background={theme.colors.dark}
              color={theme.colors.xlight}
              radius={64}
              size={64}
            >
              Saiba mais
            </Button>
            <Button
              background="rgba(0,0,0,0.3)"
              color={theme.colors.xlight}
              radius={64}
              size={64}
              filter="blur(10px)"
            >
              Entre em contato
            </Button>
          </div>
        </Main>
      </Foreground>
    </Wrapper>
  );
}
