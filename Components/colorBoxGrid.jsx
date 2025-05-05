import React from "react";
import ColorBox from "./colorBox";

function colorBoxGrid() {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox key={i} />);
    // The key prop is used to uniquely identify each ColorBox component in the array.
  }
  return <div className="flex flex-rows flex-wrap h-110 w-110">{boxes}</div>;
}

export default colorBoxGrid;
