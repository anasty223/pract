import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Container, SuperLink } from "./Projects.style";

const Projects = () => {
  return (<>
       <h2>My projects</h2>
    <Container>
 
      <SuperLink to="webstudio">WebStudio</SuperLink>|
      <SuperLink to="ice-cream">Ice Cream </SuperLink>|
      <SuperLink to="filmoteka">Filmoteka </SuperLink>|
      <SuperLink to="mouvies">Search sites </SuperLink>|
      <SuperLink to="movie_ads">Movie ads </SuperLink>|
      <SuperLink to="phonebook">PhoneBook</SuperLink>|
      <SuperLink to="kapusta">Kapusta</SuperLink>|
      <SuperLink to="social-media">Social media</SuperLink>|
      <SuperLink to="chatApp">Chat Application</SuperLink>|
      <SuperLink to="ticTac">Tic-Tac-Toe with chat App</SuperLink>
      <Outlet />
    </Container>
    </>
  );
};

export default Projects;
