import React, { useEffect } from "react";
import { useState } from "react";
import "./HomePage.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import AboutPage from "../AboutPage/AboutPage";

export default function HomePage({ display }) {
  console.log(display);
  const [displayAbout, setDisplayAbout] = useState(display);

  const handleOpen = () => {
    setDisplayAbout(true);
    if (displayAbout) {
      const element = document.getElementsByClassName("about-page");
      if (element.length > 0) {
        element[0].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    if (displayAbout) {
      console.log("scrolling");
      const element = document.getElementsByClassName("about-page");
      if (element.length > 0) {
        element[0].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [displayAbout]); // Dependency array includes displayAbout

  return (
    <div className="home-page">
      <div className="hero-info">
        <h1>jennifer tan</h1>
        <h2>— software developer and designer</h2>
        <button className="action-button" onClick={handleOpen}>
          <div className="action-button-content">
            about me <KeyboardDoubleArrowDownIcon />
          </div>
        </button>
      </div>
      {displayAbout && <AboutPage />}
    </div>
  );
}
