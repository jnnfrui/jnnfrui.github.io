// src/App.js
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeroPage from "../src/Components/HeroPage/HeroPage";

export default function App() {
  return (
    <>
      <HeroPage />
    </>
  );
}
