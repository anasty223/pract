import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Container, SuperLink } from "./Projects.style";

const Projects = () => {
  return (<> 
  
    <Container>
    <button className="noselect"> <SuperLink to="webstudio">WebStudio</SuperLink></button>
     
    <button className="noselect" >  <SuperLink to="ice-cream">Ice Cream </SuperLink></button>
    <button  className="noselect">  <SuperLink to="filmoteka">Filmoteka </SuperLink></button>
     <button  className="noselect"> <SuperLink to="mouvies">Search sites </SuperLink></button>
      <button  className="noselect"><SuperLink to="movie_ads">Movie ads </SuperLink></button>
      <button className="noselect" ><SuperLink to="phonebook">PhoneBook</SuperLink></button>
     <button  className="noselect"> <SuperLink to="kapusta">Kapusta</SuperLink></button>
     <button  className="noselect"> <SuperLink to="social-media">Social media</SuperLink></button>
      <button className="noselect" ><SuperLink to="chatApp">Chat Application</SuperLink></button>
      <button  className="noselect"><SuperLink to="ticTac">Tic-Tac-Toe/Chat</SuperLink></button>
      <button className="noselect" ><SuperLink to="calendar">Calendar</SuperLink></button>

      <Outlet />
     
    </Container>
    </>
  );
};

export default Projects;
