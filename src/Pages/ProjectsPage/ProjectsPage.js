import * as React from "react";
import { useState } from "react";
// import Logo from "../../assets/orange_logo.svg";
import { Fade } from "react-awesome-reveal";
import "./ProjectsPage.css";
import MediaCard from "./MediaCard/MediaCard";
import Select from "react-select";
import HelloUniverseImage from "../../Assets/hello-universe.png";
import StickyImage from "../../Assets/sticky.png";
import SmartSudokuImage from "../../Assets/smart sudoku.png";

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
  },
  {
    Index: 1,
    Name: "Sticky",
    Date: "Jan 2024",
    Language: ["Javascript", "HTML", "CSS"],
    Description:
      "Created a note taking app that allows users to create AI generated notes of text that they select and save those ntoes for future use.",
    Image: StickyImage,
  },
  {
    Index: 2,
    Name: "SmartSudoku",
    Date: "December 2023",
    Language: ["Java", "Java Swing", "MongoDB"],
    Description:
      " Programmed an interactive problem solving game inspired by the game 'Sudoku' but with a board that competitively plays against the user and the time. (One of my favourites!)",
    Image: SmartSudokuImage,
  },
  {
    Index: 3,
    Name: "Hello Universe",
    Date: "Jan 2023",
    Language: ["React Native", "Javascript"],
    Description:
      " Created an interactive application where students can learn different subjects aimed to provide exposure of STEM subjects and women in STEM to young students.",
    Image: HelloUniverseImage,
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
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState({ value: "All", label: "All" });
  const [displayedProjects, setDisplayedProjects] = useState(projects);
  const handleChange = (event) => {
    console.log("Changing filter");
    console.log(event.value);
    setFilter(event);
  };

  React.useEffect(() => {
    setFilteredProjects(projects, filter);
  }, [filter]);

  return (
    <div className="projects-page">
      <div className="project-header">
        <h1>projects</h1>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "10%",
        }}
      >
        <div className="project-filters">
          <p>swipe left for more!</p>
          <Select
            style={{ width: "100px" }}
            options={languages}
            value={filter}
            onChange={handleChange}
            defaultValue={{ value: "All", label: "All" }}
          />
        </div>
      </div>

      <div className="project-box">
        <React.Fragment>
          {displayedProjects.map((card, index) => {
            console.log("Displaying Card");
            console.log(card);
            return <MediaCard key={index} data={card} />;
          })}
        </React.Fragment>
      </div>
    </div>
  );

  function setFilteredProjects(projectsList, filter) {
    var new_projectList = [];
    console.log("Filtering projects...");
    console.log(filter);
    console.log(projectsList);
    if (filter.value !== "All") {
      projectsList.forEach((project) => {
        if (project.Language.includes(filter.value)) {
          new_projectList.push(project);
        }
      });
      setDisplayedProjects(new_projectList);
    } else {
      setDisplayedProjects(projectsList);
    }
    console.log("Displaying projects...");
    console.log(displayedProjects);
  }
}
