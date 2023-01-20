import React from "react";
import "./App.css";
import { Routes, Route,       HashRouter } from "react-router-dom";
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
import WorkExpirience from "./components/WorkExpirience/WorkExpirience";
import SocialMedia from "./Pages/SocialMedia/SocailMedia";
import ChatApp from "./Pages/ChatApp/ChatApp";
import TicTacToe from "./Pages/TicTacToe/TicTacToe";

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
              <Route path="social-media" element={<SocialMedia />} />
              <Route path="chatApp" element={<ChatApp />} />
              <Route path="ticTac" element={<TicTacToe/>} />
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
