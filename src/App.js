import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Projects from "./components/Projects/Projects";
import Layout from "./components/Layout/Layout";
import TechSkils from "./Pages/TechSkils";
import SoftSkils from "./Pages/SoftSkils";
import WebStudio from "./Pages/WebStudio/WebStudio";
import IceCream from "./Pages/IceCream/IceCream";
import ImageFinder from "./Pages/ImageFinder/ImageFinder";
import Filmoteka from "./Pages/Filmoteka/Filmoteka";
import Mouvies from "./Pages/Mouvies/Mouvies";
import Phonebook from "./Pages/Phonebook/Phonebook";
import Kapusta from "./Pages/Kapusta/Kapusta";
import Education from "./components/Education/Education";
import WorkExpirience from "./Pages/WorkExpirience";
import NavState from "./context/navState";
import MainMenu from "./components/MainMenu";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Anastasya Trunova</h1> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="home/:id" element={<HomePage />}>
              <Route path="tech" element={<TechSkils />} />
              <Route path="soft" element={<SoftSkils />} />
            </Route>

            <Route path="projects" element={<Projects />} />

            <Route path="projects/:id" element={<Projects />}>
              <Route path="webstudio" element={<WebStudio />} />
              <Route path="ice-cream" element={<IceCream />} />
              <Route path="images-finder" element={<ImageFinder />} />
              <Route path="filmoteka" element={<Filmoteka />} />
              <Route path="mouvies" element={<Mouvies />} />
              <Route path="phonebook" element={<Phonebook />} />
              <Route path="kapusta" element={<Kapusta />} />
            </Route>
            <Route path="education" element={<Education />} />
            <Route path="workexpirience" element={<WorkExpirience />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
