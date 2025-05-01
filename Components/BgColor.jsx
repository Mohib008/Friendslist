import React from "react";
import { useState } from "react";
import color from "../Components/color";
// This component allows the user to select a background color using an input of type color.

function BgColor() {
  const [bgColor, setBgColor] = useState("whithe");
  // The useState hook is used to create a state variable bgColor with an initial value of "white".

  const handleChange = (e) => {
    setBgColor(e.target.value);
  };
  return (
    <div>
      <input type="color" value={bgColor} onChange={handleChange} />
      <div
        // The input type color allows the user to select a color.
        // The value of the input is set to the current background color.
        // The onChange event updates the background color state when the user selects a new color.
        // The div below displays the selected background color.
        // The background color is set to the value of bgColor.
        // The width and height are set to 100px, and a black border is added for visibility.
        style={{
          backgroundColor: bgColor,
          width: "100px",
          height: "100px",
          border: "1px solid black",
        }}
      ></div>
      <div>
        <p>
          The selected color Code is:{" "}
          <span style={{ backgroundColor: bgColor, color: "white" }}>
            {bgColor}
          </span>
        </p>
        {/* The selected color is displayed below the color input. */}
        {/* The bgColor state variable is used to display the selected color. */}
        {/* The bgColor state variable is used to store the selected background color. */}
        {/* The setBgColor function is used to update the bgColor state variable when the user selects a new color. */}
        <p>
          {color.map((color) => (
            <span
              key={color}
              style={{
                backgroundColor: color,
                width: "100px",
                height: "100px",
                border: "1px solid black",
                display: "inline-block",
              }}
            ></span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default BgColor;
