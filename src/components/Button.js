import React from "react";
import PropTypes from "prop-types";
import Ripples from "react-ripples";
import styled from "styled-components";

const RipplesEffect = styled(Ripples)`
  border-radius: ${({ radius }) => radius + "px"};
`;

const StyledButton = styled.button`
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: center;

  padding: 0 ${({ theme }) => theme.spacing.medium + "px"};
  height: ${({ size }) => size + "px"};
  border-radius: ${({ radius }) => radius + "px"};

  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  line-height: ${props => props.size + "px"};
  text-transform: uppercase;

  background: ${({ background }) => background};
  color: ${({ color }) => color};
  cursor: pointer;

  -webkit-backdrop-filter: ${({ filter }) => filter};
  backdrop-filter: ${({ filter }) => filter};

  /* ICON */

  ::before {
    content: "";

    display: ${({ icon }) => (icon ? "inline-block" : "none")};
    margin-right: ${({ theme }) => theme.spacing.small + "px"};
    height: 24px;
    width: 24px;

    vertical-align: middle;
    justify-self: center;
    align-self: center;

    background: ${({ color }) => color};
    mask-image: url(${({ icon }) => icon});
  }

  /* RESETING */
  border: none;
  outline: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  ::-moz-focus-inner {
    border: none;
  }
`;

export default function Button({
  children,
  size = 64,
  radius = 20,
  background = "inherit",
  filter = "none",
  color = "#000000",
  icon,
  ...props
}) {
  return (
    <RipplesEffect radius={radius}>
      <StyledButton
        size={size}
        radius={radius}
        background={background}
        color={color}
        icon={icon}
        filter={filter}
        {...props}
      >
        {children}
      </StyledButton>
    </RipplesEffect>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.number,
  radius: PropTypes.number,
  filter: PropTypes.string
};
