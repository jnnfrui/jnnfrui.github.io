import React, { useState } from "react";
import "./AboutPage.css";
import profileImage from "../../Assets/profile-real.gif";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import { IconButton, Tooltip } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import { Flip, Hinge, Slide } from "react-awesome-reveal";
import profile_gif from "../../Assets/profile.gif";
import catopen from "../../Assets/cat-open.png";
import catclosed from "../../Assets/cat-closed.png";

export default function AboutPage() {
  const [showDetail, setShowDetail] = useState(false);

  const handleDetail = () => {
    console.log("Flipping Card");
    setShowDetail(!showDetail);
    console.log(showDetail);
  };

  return (
    <div className="about-page">
      <div className="about-content">
        <Tooltip title="click to flip me!" placement="top">
          <span>
            <Slide>
              <ReactCardFlip isFlipped={showDetail} flipDirection="vertical">
                <div className="about-card" onClick={handleDetail}>
                  <div className="about-image">
                    <img
                      src={profileImage}
                      alt="profile-picture"
                      width={"100%"}
                    />
                  </div>
                  <div className="about-text-alt">
                    <div className="about-header">
                      <h1>about me</h1>
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

                    <hr
                      style={{
                        color: "black",
                        backgroundColor: "black",
                        height: 2,
                      }}
                    />
                    <p>
                      hello! my name is jennifer, i am currently a third year
                      student attending the <b>university of toronto</b> with a
                      specialization in <b>computer science</b> and minor in
                      <b> mathematics</b> and <b>digital humanities!</b>{" "}
                      (∩˃o˂∩)♡
                    </p>
                  </div>
                </div>
                <div className="about-card" onClick={handleDetail}>
                  <div className="about-image">
                    <img
                      src={profile_gif}
                      alt="profile-picture"
                      width={"100%"}
                    />
                  </div>
                  <div className="about-text-alt">
                    <h1>JENN'S PROFILE</h1>
                    <hr
                      style={{
                        color: "black",
                        backgroundColor: "black",
                        height: 2,
                      }}
                    />
                    <p>
                      <b>developer name: </b> jenn!!!! ◝(ᵔᵕᵔ)◜
                    </p>
                    <p>
                      <b>pronouns:</b> she/her/they/them
                    </p>
                    <p>
                      <b>favourite coding language:</b> python (the goat)
                    </p>
                    <p>
                      <b>current favourite hobbies:</b> keyboards, music,
                      drawing
                    </p>
                  </div>
                </div>
              </ReactCardFlip>
            </Slide>
          </span>
        </Tooltip>
      </div>
    </div>
  );
}
