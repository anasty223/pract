import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding-top: 20px;
`;

export const Image = styled.img`
  margin-top: 20px;
  width: 200px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid #64694b;
  @media (min-width: 768px) {
    width: 300px;
  } ;
`;


export const ImageTic=styled.img`

margin-top: 20px;
width: 100px;
margin-right: auto;
margin-left: auto;
border: 2px solid #64694b;
@media (min-width: 768px) {
  width: 300px;

  
} ;
`
export const Heder = styled.h3`
  @media (min-width: 768px) {
    padding: 0 50px 50px 50px;
  } ;
`;
export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #a2a593;
  border-radius: 3px;
`;
export const ContainerImg = styled.div`
  @media (min-width: 768px) {
    display: flex;
  } ;
`;
export const ContainerLink = styled.div`
  margin-top: 20px;
`;
export const Link = styled.a`
  font-weight: bold;
  color: #64694b;
  text-decoration: none;
`;
