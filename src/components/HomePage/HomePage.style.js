import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardWrapper = styled.div`
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

export const Image = styled.img`
  width: 210px;
  display: block;
  margin-right: auto;
  margin-left: auto;
`;
export const Container = styled.div`
  display: flex;
  width: 900px;
`;
export const Letter = styled.h3`
  fon-size: 30px;
  border-bottom: 2px solid #e0e1db;
  text-align: start;
  padding-bottom: 20px;
`;
export const List = styled.ul`
  border-bottom: 2px solid #e0e1db;
  text-align: start;
  padding-bottom: 20px;
`;
export const HeaderLang = styled.span`
  fon-size: 30px;
`;

export const ContainerAditional = styled.div`
  display: block;
`;
export const Header = styled.h2`
  color: maroon;
  text-transform: uppercase;
`;
export const Contacts = styled.a`
  color: #64694b;
  margin-left: 5px;
  &:hover,
  :focus {
    color: #a2a593;
  }
`;
export const ListContacts = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 10px;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const ListContact = styled.ul`
  border-bottom: 2px solid #e0e1db;
  text-align: start;
  padding-bottom: 20px;
`;
export const Linktech = styled(NavLink)`
  color: #64694b;
  &.active {
    color: #a2a593;
    text-decoration: none;
  }

  &:hover,
  :focus {
    color: #a2a593;
  }
`;
export const ItemTech = styled.li`
  margin-bottom: 10px;
  xt-align: start;

  &:hover,
  :focus {
    color: #a2a593;
  }
`;
export const ListAdditional = styled.ul`
  text-align: start;
  padding-bottom: 20px;
`;
