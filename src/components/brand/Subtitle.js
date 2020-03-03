import styled from "styled-components";

export default styled.h2`
  padding-left: ${({ theme }) => theme.spacing.medium + "px"};

  color: ${({ theme }) => theme.colors.xdark};

  font-family: ${({ theme }) => theme.fonts.strong}, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 45px;
  font-size: 34px;
  letter-spacing: 5px;
  text-transform: uppercase;
`;
