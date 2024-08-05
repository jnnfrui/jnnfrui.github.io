import "./ExperiencePage.css";
import React from "react";
import { Chip } from "@mui/material";
import { Fade } from "react-awesome-reveal";

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

export default function ExperiencePage() {
  return (
    <div className="experience-page">
      <h1>experience</h1>
      <Fade>
        <div className="bottom-box">
          <div className="bottom-box-context">
            <h2>education</h2>
            <p>
              University of Toronto St. George, Specialist in Computer Science,
              Minor in Mathematics and Digital Humanities
            </p>
          </div>
        </div>
        <div className="top-box">
          <div className="sub-box1">
            <h2>skills</h2>
            <p>
              Languages: Python, Java, Javascript, HTML, css, Assembly, C, C++
            </p>

            <p>
              Frameworks/Libraries: Django, React.js, Redux, pandas, Pygame,
              Plotly, Pillow, MUI, PhET
            </p>

            <p>
              Developer Tools: Node.js, Git, VS Code, Visual Studio, PyCharm,
              IntelliJ, Eclipse, Xcode
            </p>
          </div>
          <div className="sub-box1">
            <h2>work experiences</h2>
            {experiences.map((experience) => {
              return (
                <div className="job-context">
                  <p>
                    <b>{experience.JobTitle}:</b> {experience.Duration}
                  </p>
                  {experience.Skills.map((skill) => {
                    return (
                      <Chip label={skill} variant="outlined" size="small" />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}
