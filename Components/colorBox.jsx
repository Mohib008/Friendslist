"use client"; // Required for Next.js 13+ (since we're using hooks)

import { useEffect, useState } from "react";
import color from "./color";
import radomChoice from "./randomChoice";

export default function ColorBox() {
  const [bgColor, setBgColor] = useState(radomChoice(color)); // Initial background color
  const [isMounted, setIsMounted] = useState(false); // State to track if the component is mounted
  // The useState hook is used to create a state variable isMounted with an initial value of false.
  // The useState hook is used to create a state variable bgColor with an initial value of the first color in the array.
  // Set random color on component mount

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const ColorChanger = () => {
    const randomColor = radomChoice(color);
    // The randomColor variable is assigned a random color from the color array.
    // The radomChoice function is called to get a random color from the color array.
    // The color array is imported from the color.js file.
    setBgColor(randomColor);
  };

  if (!isMounted) {
    return null; // Prevent rendering until the component is mounted
  }

  return (
    <>
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
    </>
  );
}
