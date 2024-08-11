import "./NavBar.css";
import { Autocomplete, Avatar, TextField, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import profileImage from "../../../../Assets/avatar.gif";
import ClearIcon from "@mui/icons-material/Clear";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

const topics = ["Hello", "world"];

export default function NavBar({ activeSection }) {
  const [isSearching, setIsSearching] = useState(false);
  const [message, setMessage] = useState("");
  const [animationClass, setAnimationClass] = useState("");
  const [showMessage, setShowMessage] = useState(true);

  const handleMessage = () => {
    setShowMessage(!showMessage);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsSearching(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollToSection = (className) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const getMessageForSection = () => {
      switch (activeSection) {
        case "home":
          return "hey welcome! i'll be your guide today but, if you want me to go away, go ahead and click the 'x' button. if you want to bring me back, then just click the bottom icon that i transform into! :D";
        case "about":
          return "fun fact: my hobbies often go on rotation depending on how i'm feeling, so feel free to see how it changes over time! ";
        case "projects":
          return "these are my projects. currently i have only done some small projects for school and hackathons, but i'm always open to trying out new challenges! click on the github link to see the repository.";
        case "experience":
          return "you've made it to the end of my page! feel free to use any of the links to get in touch with me or to see some of my other socials! hope to see you again! >v<";
        case "footer":
          return "you've made it to the end of my page! feel free to use any of the links to get in touch with me or to see some of my other socials! hope to see you again! >v<";
        default:
          return "";
      }
    };

    // Triggering a transition by changing the animation class
    const newMessage = getMessageForSection();
    if (message !== newMessage) {
      setAnimationClass("fade-out"); // Start fade-out animation
      setTimeout(() => {
        setMessage(newMessage); // Update message
        setAnimationClass("fade-in"); // Start fade-in animation
      }, 300); // Match this delay with the CSS animation duration
    }
  }, [activeSection, message]);

  return (
    <>
      <div
        className={`hero-navbar ${isSearching ? "search-active" : ""} ${
          activeSection !== "home" ? "semi-transparent" : ""
        }`}
      >
        <div className={`navbar-block`}>
          <div
            className={`navbar-text ${
              activeSection === "home" ? "active" : ""
            }`}
            onClick={() => scrollToSection("hero-home")}
          >
            home
          </div>
          <div
            className={`navbar-text ${
              activeSection === "about" ? "active" : ""
            }`}
            onClick={() => scrollToSection("hero-about")}
          >
            about
          </div>
          <div
            className={`navbar-text ${
              activeSection === "projects" ? "active" : ""
            }`}
            onClick={() => scrollToSection("hero-projects")}
          >
            projects
          </div>
          <div
            className={`navbar-text ${
              activeSection === "experience" ? "active" : ""
            }`}
            onClick={() => scrollToSection("hero-experience")}
          >
            experience
          </div>
        </div>
      </div>
      <Autocomplete
        className={`search-bar ${isSearching ? "search-visible" : ""}`}
        freeSolo
        size="small"
        id="free-solo-2-demo"
        disableClearable
        options={topics.map((option) => option)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiAutocomplete-listbox": {
            backgroundColor: "transparent",
          },
          "& .MuiAutocomplete-option": {
            color: "white",
          },
          "& .MuiAutocomplete-option.Mui-focused": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        }}
      />
      {showMessage ? (
        <div className={`speech-message active ${animationClass}`}>
          <Avatar
            alt="Profile Picture"
            src={profileImage}
            sx={{
              width: 40,
              height: 40,
              marginRight: 10,
              transform: "scale(1.1)", // Apply zoom effect
              transition: "transform 0.3s ease", // Smooth transition for scaling
            }}
          />
          {message}
          <IconButton onClick={handleMessage}>
            <ClearIcon />
          </IconButton>
        </div>
      ) : (
        <div className={`speech-message inactive ${animationClass}`}>
          <IconButton onClick={handleMessage}>
            <LiveHelpIcon />
          </IconButton>
        </div>
      )}
    </>
  );
}
