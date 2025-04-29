import React from "react";
import { useState } from "react";

function footer() {
  const [count, setCount] = useState(0);
  const [isHappy, setIsHappy] = useState(true);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decreamntCount = () => {
    setCount(count - 1);
  };
  const restCount = () => {
    setCount(0);
  };
  const toggleIsHappy = () => {
    setIsHappy(!isHappy);
  };
  return (
    <>
      <div>
        <p
          className="text-center text-2xl size-10 font-bold"
          onClick={toggleIsHappy}
        >
          {isHappy ? "🙋" : "😥"}
        </p>
        <p>Number Count is: {count} </p>
        <div className="flex justify-center gap-4">
          <button
            className="bg-blue-400 hover:bg-blue-500 rounded-xl p-3  hover:text-white font-bold"
            onClick={incrementCount}
          >
            Increment
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 rounded-xl p-3  hover:text-white font-bold">
            Decrement
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 rounded-xl p-3  hover:text-white font-bold">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default footer;
