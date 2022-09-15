import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Container, SuperLink } from "./Projects.style";

const Projects = () => {
  return (
    <Container>
      <h2>My projects</h2>
      <SuperLink to="webstudio">WebStudio</SuperLink>|
      <SuperLink to="ice-cream">Ice Cream </SuperLink>|
      <SuperLink to="filmoteka">Filmoteka </SuperLink>|
      <SuperLink to="mouvies">Mouvies </SuperLink>|
      <SuperLink to="images-finder">Images finder </SuperLink>|
      <SuperLink to="phonebook">PhoneBook</SuperLink>|
      <SuperLink to="kapusta">Kapusta</SuperLink>
      <Outlet />
    </Container>
  );
};

export default Projects;
