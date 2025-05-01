import React from "react";
import { useState } from "react";
// This component allows the user to select a background color using an input of type color.

function BgColor() {
  const [bgColor, setBgColor] = useState("white");

  const handleChange = (e) => {
    setBgColor(e.target.value);
  };
  return (
    <div>
      <input type="color" value={bgColor} onChange={handleChange} />
      <div
        style={{ backgroundColor: bgColor, width: "100px", height: "100px" }}
      ></div>
    </div>
  );
}

export default BgColor;
