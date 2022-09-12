import { NavLink, Outlet } from "react-router-dom";
import NavState from "../../context/navState";
import MainMenu from "../MainMenu";
import { SuperLink, Container, Hamburger } from "./Layout.styles";

export default function Layout() {
  return (
    <Container>
      <Hamburger>
        <NavState>
          <MainMenu />
        </NavState>
        <SuperLink to="/home">Home</SuperLink> |
        <SuperLink to="/projects">Projects</SuperLink>|
        <SuperLink to="/education">Education</SuperLink>|
        <SuperLink to="/workexpirience">Work expirience</SuperLink>
        <Outlet />
      </Hamburger>
    </Container>
  );
}
