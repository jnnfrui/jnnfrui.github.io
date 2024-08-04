// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProjectPage from "./Pages/ProjectsPage/ProjectsPage";
import "./App.css";

// Define some simple components for different pages
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage display={false} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}
