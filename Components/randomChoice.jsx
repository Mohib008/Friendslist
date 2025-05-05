"use client"; // Required for Next.js 13+ (since we're using hooks)

import React from "react";

function randomChoice(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
  // The Math.random() function generates a random number between 0 and 1.
  // The Math.floor() function rounds down the random number to the nearest integer.
}

export default randomChoice;
