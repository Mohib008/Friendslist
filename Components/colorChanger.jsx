"use client"; // Required for Next.js 13+ (since we're using hooks)

import { useState } from "react";
import color from "../Components/color";

export default function ColorChanger() {
  const [bgColor, setBgColor] = useState(color[0]); // Initial background color
  // The useState hook is used to create a state variable bgColor with an initial value of the first color in the array.

  // Function to change the background color
  const changeColor = () => {
    const currentIndex = color.indexOf(bgColor);
    const nextIndex = (currentIndex + 1) % color.length;
    setBgColor(color[nextIndex]);
    // The changeColor function updates the bgColor state variable to the next color in the array.
    // It uses the indexOf method to find the current color's index and then calculates the next index using modulo operation.
    // This ensures that when the end of the array is reached, it wraps around to the beginning.
    // The setBgColor function is used to update the bgColor state variable with the new color.
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: "30vw",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "background-color 0.3s ease", // Smooth transition
      }}
      onClick={changeColor}
    ></div>
  );
}
