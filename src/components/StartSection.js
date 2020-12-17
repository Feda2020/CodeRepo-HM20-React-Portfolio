import React from "react";
import "../App.css";
import "./StartSection.css";

function StartSection() {
  return (
    <div className="start-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>Feda Zidan</h1>
      <p>Full Stack Web Developer</p>
      <div className="start-btns">
      </div>
    </div>
  );
}

export default StartSection;
