import styled from "styled-components";

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
  margin-top: 30px;
  @media (min-width: 768px) {
    width: 720px;
    margin-right: auto;
    margin-left: auto;
  } ;
`;

export const List = styled.ul`
  text-align: start;
  @media (min-width: 768px) {
    text-align: center;
  } ;
`;
export const Item = styled.li`
  font-size: 15px;
  display:flex;
  align-items:center;
  justify-content:space-around;
  border-bottom:2px solid #a2a593;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
 
`;
