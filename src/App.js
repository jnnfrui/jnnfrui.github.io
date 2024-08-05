// src/App.js
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProjectPage from "./Pages/ProjectsPage/ProjectsPage";
import ExperiencePage from "./Pages/ExperiencePage/ExperiencePage";
import "./App.css";
import { Slide } from "react-awesome-reveal";
import catopen from "./Assets/cat-open.png";
import catclosed from "./Assets/cat-closed.png";

export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Router>
        <div className="components">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage display={false} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
          </Routes>
        </div>
      </Router>
      <div
        className="hero-image"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? catclosed : catopen}
          alt={isHovered ? "cat-smiling-eyes" : "cat-open-eyes"}
          className="image"
        />
      </div>
    </>
  );
}
