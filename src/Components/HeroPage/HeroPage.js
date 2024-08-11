import NavBar from "./Components/NavBar/NavBar";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./HeroPage.css";
import { Fade } from "react-awesome-reveal";
import { Button, Grid } from "@mui/material";
import profile_picture from "../../Assets/profile.jpeg";
import StickyImage from "../../Assets/sticky.png";
import SmartSudokuImage from "../../Assets/smart sudoku.png";
import HelloUniverseImage from "../../Assets/hello-universe.png";
import { Chip } from "@mui/material";
import { Mail, LinkedIn, GitHub, Article } from "@mui/icons-material";

const languages = [
  { value: "All", label: "All" },
  { value: "Java", label: "Java" },
  { value: "Python", label: "Python" },
  { value: "Javascript", label: "Javascript" },
  { value: "Assembly", label: "Assembly" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
];

const projects = [
  {
    Index: 0,
    Name: "Tetris",
    Date: "April 2024",
    Language: ["Assembly"],
    Description:
      "Created an interactive Tetris game with all the possible blocks and animations. Includes a score and game over option, purely coded in Assembly for CSC258.",
    Image:
      "https://images.unsplash.com/photo-1646708198974-4c4893e8a2d7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Link: "N/A",
  },
  {
    Index: 1,
    Name: "Sticky",
    Date: "Jan 2024",
    Language: ["Javascript", "HTML", "CSS"],
    Description:
      "Created a note taking app that allows users to create AI generated notes of text that they select and save those ntoes for future use.",
    Image: StickyImage,
    Link: "https://github.com/jnnfrui/Sticky",
  },
  {
    Index: 2,
    Name: "SmartSudoku",
    Date: "December 2023",
    Language: ["Java", "Java Swing", "MongoDB"],
    Description:
      " Programmed an interactive problem solving game inspired by the game 'Sudoku' but with a board that competitively plays against the user and the time. (One of my favourites!)",
    Image: SmartSudokuImage,
    Link: "https://github.com/jnnfrui/SmartSudoku",
  },
  {
    Index: 3,
    Name: "Hello Universe",
    Date: "Jan 2023",
    Language: ["React Native", "Javascript"],
    Description:
      " Created an interactive application where students can learn different subjects aimed to provide exposure of STEM subjects and women in STEM to young students.",
    Image: HelloUniverseImage,
    Link: "https://github.com/jnnfrui/HelloUniverse",
  },
  {
    Index: 4,
    Name: "Skincare Recommender",
    Date: "April 2023",
    Language: ["Python"],
    Description:
      "Created a skincare Recommender that determines what products are most suitable for a person's skin type and skin goals through a sorting algorithm that prioritizes the statistics provided by the user.",
    Image:
      "https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Link: "https://github.com/jnnfrui/Skincare-Recommender",
  },
];

const experiences = [
  {
    JobTitle: "Techinical Operations Developer Co-op",
    Duration: "May 2024 - Aug 2024",
    Skills: ["React.js", "Django", "Redux", "Firebase", "Qiankun"],
  },
  {
    JobTitle: "Front-End Developer Intern",
    Duration: "June 2023 - August 2023",
    Skills: ["React.js"],
  },
  {
    JobTitle: "Stem Instructor",
    Duration: "Sept 2021 - August 2024",
    Skills: ["Arduino", "Python", "Java"],
  },
];

export default function HeroPage() {
  const [activeSection, setActiveSection] = useState("home");
  const hours = new Date().getHours();
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    if (hours < 12 && hours > 5) {
      setPhrase("Good morning!");
    } else if (hours >= 12 && hours < 18) {
      setPhrase("Good afternoon!");
    } else {
      setPhrase("Good evening!");
    }
  }, [hours]);

  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.1,
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.1,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
  });

  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.1,
  });

  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (projectsInView) setActiveSection("projects");
    else if (experienceInView) setActiveSection("experience");
    else if (footerInView) setActiveSection("footer");
  }, [homeInView, aboutInView, projectsInView, experienceInView, footerInView]);

  return (
    <div className="hero-page">
      <NavBar activeSection={activeSection} />
      <div ref={homeRef} className="hero-home">
        <Fade>
          <div className="subheader">{phrase} my name is</div>
          <div className="header">Jennifer</div>
          <div className="subheader">
            a computer science student and developer based in toronto ᕙ( •̀ ᗜ •́
            )ᕗ
          </div>
        </Fade>
      </div>
      <div ref={aboutRef} className="hero-about">
        <Fade>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <div className="header">who am i?</div>
              <div className="subheader">
                hello! my name is <b>jennifer (she/they) </b>and i am currently
                a third year student attending the university of toronto with a
                specialization in computer science and minor in mathematics and
                digital humanities.
              </div>
              <br />
              <div className="subheader">
                outside of programming and designing, i can be found listening
                to music, attending art conventions, trying to learn a new hobby
                or going hiking! ⸜(｡˃ ᵕ ˂ )⸝♡
              </div>
              <br />
              <div className="subheader">
                current favourite hobbies: pokemon and keyboards (˵ •̀ ᴗ - ˵ )
              </div>
              <div className="links">
                <Button
                  href="mailto:jennifer.xinrui@gmail.com"
                  target="_blank" // Optional: opens the email client in a new tab
                  rel="noopener noreferrer" // Optional: improves security when opening new tabs
                >
                  <Mail /> email
                </Button>
                <Button
                  href="https://github.com/jnnfrui" // Replace with your GitHub link
                  target="_blank" // Optional: opens the link in a new tab
                  rel="noopener noreferrer" // Optional: improves security when opening new tabs
                >
                  <GitHub /> github
                </Button>
                <Button
                  href="https://www.linkedin.com/in/jnnfrtn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn /> linkedin
                </Button>
                <Button
                  href="/jennifer-resume-august-2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Article /> resume
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={profile_picture}
                  alt="profile picture"
                  style={{
                    height: "auto",
                    width: "80%",
                    maxWidth: "80%", // Ensure it doesn't overflow
                    borderRadius: "20px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Fade>
      </div>

      <div ref={projectsRef} className="hero-projects">
        <Fade>
          <div className="header">my projects</div>
          <div className="subheader">
            here are some of the projects i have done over the course of a few
            years.
          </div>
          <div className="subheader">
            some are from school projects and others from hackathons!
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {projects.map((project) => {
              return (
                <div className="project-box">
                  <img src={project.Image} />
                  <div className="subheader">
                    <b>{project.Name}</b>
                  </div>
                  <div style={{ display: "flex" }}>
                    {project.Language.map((language) => {
                      return (
                        <Chip
                          label={language}
                          style={{ width: "fit-content", color: "white" }}
                        />
                      );
                    })}
                  </div>

                  <div className="subheader">{project.Description}</div>
                  <div className="subheader" style={{ marginTop: "auto" }}>
                    {project.Link === "N/A" ? (
                      <>
                        This is a private repository. Please contact me for more
                        info!
                      </>
                    ) : (
                      <Button
                        href={project.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github Link
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
      <div ref={experienceRef} className="hero-experience">
        <Fade>
          <div className="header">my experience</div>
          <div className="subheader" style={{ marginTop: "10px" }}>
            here is a diagram of my work experience so far!
          </div>
          <div className="subheader">
            i have done two internships so far working mostly with full-stack
            web development and i also teach STEM subjects part-time.
          </div>
          <div className="subheader" style={{ marginBottom: "10px" }}>
            <i>
              For more information about my volunteer experiences, feel free to
              take a look at my resume!
            </i>
          </div>
          <div className="experience-container">
            <Grid container spacing={4}>
              <Grid item xs={7}></Grid>
              <Grid item xs={5}>
                <div className="experience-timeblock">
                  <div className="subheader">
                    <b>{experiences[0].JobTitle}</b>
                  </div>
                  <div className="subheader">{experiences[0].Duration}</div>
                  <div className="subheader">
                    {experiences[0].Skills.map((skill) => {
                      return (
                        <Chip
                          label={skill}
                          style={{ width: "fit-content", color: "white" }}
                        />
                      );
                    })}
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <div className="experience-timeblock">
                  <div className="subheader">
                    <b>{experiences[1].JobTitle}</b>
                  </div>
                  <div className="subheader">{experiences[1].Duration}</div>
                  <div className="subheader">
                    {experiences[1].Skills.map((skill) => {
                      return (
                        <Chip
                          label={skill}
                          style={{ width: "fit-content", color: "white" }}
                        />
                      );
                    })}
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={12}>
                <div className="experience-timeblock">
                  <div className="subheader">
                    <b>{experiences[2].JobTitle}</b>
                  </div>
                  <div className="subheader">{experiences[2].Duration}</div>
                  <div className="subheader">
                    {experiences[2].Skills.map((skill) => {
                      return (
                        <Chip
                          label={skill}
                          style={{ width: "fit-content", color: "white" }}
                        />
                      );
                    })}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </div>
      <div className="footer" ref={footerRef}>
        &copy; 2024 Jennifer Tan. All rights reserved. Made with React :3
      </div>
    </div>
  );
}
