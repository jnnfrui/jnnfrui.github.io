import React, { useEffect } from "react";
import { useState } from "react";
import "./HomePage.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import AboutPage from "../AboutPage/AboutPage";
import { Fade, Slide } from "react-awesome-reveal";
import catopen from "../../Assets/cat-open.png";
import catclosed from "../../Assets/cat-closed.png";

export default function HomePage({ display }) {
  console.log(display);
  const [displayAbout, setDisplayAbout] = useState(display);
  const [isHovered, setIsHovered] = useState(false);

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
        <div className="hero-text">
          <Slide>
            <h1>jennifer tan</h1>
          </Slide>
          <Slide>
            <h2>— aspiring software/web developer and designer</h2>
            <button className="action-button" onClick={handleOpen}>
              <div className="action-button-content">
                about me <KeyboardDoubleArrowDownIcon />
              </div>
            </button>
          </Slide>
        </div>
      </div>
      {displayAbout && <AboutPage />}
    </div>
  );
}
