import React from "react";
import "./AboutPage.css";
import profileImage from "../../Assets/profile.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import { IconButton } from "@mui/material";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-text">
          <h1>about me</h1>
          <p>
            hello! my name is jennifer (she/they) and i am currently a third
            year student attending the university of toronto with a
            specialization in computer science and minors in mathematics and
            digital humanities! (∩˃o˂∩)♡
          </p>
          <p>
            some cool facts about me is that i love to design and solve
            problems, going to art conventions, listening to music, playing
            games and many other hobbies.
          </p>
        </div>
        <div className="about-image-links">
          <img
            src={profileImage}
            alt="profile-picture"
            className="profile-image"
          />
          <div className="about-links">
            <a
              href="https://github.com/jnnfrui"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/jnnfrtn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </a>
            <a
              href="/jennifer-resume-august-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="resume"
              download="jennifer-resume-august-2024.pdf"
            >
              <IconButton>
                <ArticleIcon />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
