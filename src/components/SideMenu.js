import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { MenuContext } from "../context/navState";

const Menu = styled.nav`
  position: absolute;
  // top: 115px;
  left: 0px;
  // bottom: 0px;
  z-index: 293;
  display: block;
  width: 200px;
  height: 100vh;
  max-width: 100%;
  margin-top: 0px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #a2a593;

  transform: translateX(-120%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const SuperLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  display: block;
  max-width: 100%;
  padding-left: 16%;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #ffffff;
  font-size: 25px;
  &.active {
    color: #64694b;
  }
`;
export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

SideMenu.defaultProps = {
  children: (
    <>
      <SuperLink to="/home">Home</SuperLink>

      <SuperLink to="/projects">Projects</SuperLink>

      <SuperLink to="/education">Education</SuperLink>

      <SuperLink to="/workexpirience">Work expirience</SuperLink>
    </>
  ),
};
