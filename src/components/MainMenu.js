import React, { useRef, useContext } from "react";
import styled from "styled-components";
import useOnClickOutside from "../hooks/onClickOutside";
import { MenuContext } from "../context/navState";
import HamburgerButton from "./HamburgerButton";
import { SideMenu } from "./SideMenu";
import { BsTelephoneFill, BsTelegram } from "react-icons/bs";

const Navbar = styled.div`
  // display: flex;
  justify-content:center;
  position: relative;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: #64694b none repeat scroll 0% 0%;
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
`;
const Container = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;
const Link = styled.a`
  width: 20px;
`;
const Header=styled.h2`
margin: 11px 0 17px 0;
font-size: 40px;
line-height: 40px;
color: #64694b;
text-shadow: 0 13.36px 8.896px #64694b,0 -2px 1px #fff;
letter-spacing: 1px;

`

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <Navbar>
        <HamburgerButton />
        <Container>
          
          <Header>Anastasya *** Trunova</Header>
          {/* <Link href="tel:+380937657086">
            <BsTelephoneFill width="25px" heigt="25px"  className="linkPhone" stroke="white"/>
          </Link> */}
        </Container>
      </Navbar>
      <SideMenu />
    </header>
  );
};

export default MainMenu;
