import styled from "styled-components";
import { Outlet, NavLink, useLocation } from "react-router-dom";

export const Container = styled.div`
  overflow: hidden;
  padding: 30px;
  margin-right: auto;
  margin-left: auto;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  overflow-style: none;
`;

export const SuperLink = styled(NavLink)`
  max-width: 100%;
  color: #14150f;
  text-decoration: none;
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  &.active {
    color: #64694b;
    text-decoration: underline;
    text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);
  }
`;
