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
font-family: "Paytone One";
  @media (min-width: 768px) {
    padding: 0 50px 0px 50px;
  } ;
`;
export const Button = styled.button`
font-family: "Paytone One";
  color: white;
  font-size: 25px;
  margin: 1em;
  cursor: 'pointer',
  padding: 0.25em 1em;

  border-radius: 3px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
   -khtml-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-tap-highlight-color: transparent;
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
  color: #ffffff;
  text-decoration: none;
`;
