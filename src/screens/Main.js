import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Brand from "components/Brand";
import Button from "components/Button";
import { Background } from "components/Bauhaus";

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
  display: grid;
  padding: ${({ theme }) => theme.spacing.large + "px"};
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
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <Background />
      <Foreground>
        <Main>
          <div>
            <Brand.Title>Prisma</Brand.Title>
            <Brand.Divider />
            <Brand.Subtitle>Software com qualidade</Brand.Subtitle>
          </div>
          <div>
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
