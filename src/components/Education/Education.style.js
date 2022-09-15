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
`;

export const List = styled.ol`
  text-align: start;
`;
export const Item = styled.li`
  font-size: 15px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
