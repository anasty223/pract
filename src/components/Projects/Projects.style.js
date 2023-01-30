import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  overflow: hidden;
  margin-top: 30px;
  padding: 30px;
  heigt: 100vh;
  margin-right: auto;
  margin-left: auto;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  overflow-style: none;
  @media (min-width: 768px) {
    width:950px;
    display: flex;
    justify-content:center; 
    flex-wrap: wrap;
  } ;
`;
export const SuperLink = styled(NavLink)`

font-family: "Paytone One";
  max-width: 100%;
  width: calc(100% / 3);
  color: #ffffff;
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
