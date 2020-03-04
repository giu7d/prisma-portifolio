import styled from "styled-components";

export default styled.h1`
  width: 275px;

  color: ${({ theme }) => theme.colors.xdark};

  font-family: ${({ theme }) => theme.fonts.strong}, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 95px;
  letter-spacing: 10px;
  text-transform: uppercase;
`;
