import { Outlet, NavLink, useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation();

  return (
    <div>
      <h2>Page Projects</h2>
      <NavLink to="webstudio">WebStudio</NavLink>|
      <NavLink to="ice-cream">Ice Cream </NavLink>|
      <NavLink to="filmoteka">FILMOTEKA </NavLink>|
      <NavLink to="mouvies">Mouvies </NavLink>|
      <NavLink to="images-finder">Images finder </NavLink>|
      <NavLink to="phonebook">PhoneBook</NavLink>
      <NavLink to="kapusta">Kapusta</NavLink>
      <Outlet />
    </div>
  );
};

export default Projects;
