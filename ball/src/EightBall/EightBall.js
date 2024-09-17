import React, { useState } from "react";
import './EightBall.css';  // Import the CSS file

function EightBall({ answers }) {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  function handleClick() {
    // Check if answers is defined and has at least one element
    if (answers && answers.length > 0) {
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      setMsg(randomAnswer.msg);
      setColor(randomAnswer.color);
    } else {
      // Handle case when answers is undefined or empty
      console.error("No answers provided!");
    }
  }

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: color }}  // Set the background color from state
    >
      <b>{msg}</b>
    </div>
  );
}

export default EightBall;

