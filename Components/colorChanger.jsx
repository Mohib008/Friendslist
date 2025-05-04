"use client"; // Required for Next.js 13+ (since we're using hooks)

import { useState } from "react";
import color from "../Components/color";

export default function ColorChanger() {
  const [bgColor, setBgColor] = useState("red"); // Initial background color
  // The useState hook is used to create a state variable bgColor with an initial value of the first color in the array.
  // Set random color on component mount
  const ColorChanger = () => {
    const index = Math.floor(Math.random() * color.length);
    const randomColor = color[index];
    // The useEffect hook is used to set a random color when the component mounts.
    // The Math.random() function generates a random number between 0 and 1.
    // The Math.floor() function rounds down the random number to the nearest integer.
    // The random number is multiplied by the length of the color array to get a random index.
    // The random index is used to select a random color from the color array.
    setBgColor(randomColor);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: "6vw",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "background-color 0.3s ease", // Smooth transition
      }}
      onClick={ColorChanger} // Change color on click
    ></div>
  );
}
