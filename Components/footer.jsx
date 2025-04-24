import React from "react";
import { useState } from "react";

function footer() {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Number Count is: {count} </p>
      <button
        className="bg-blue-400 hover:bg-blue-500 rounded-xl p-3  hover:text-white font-bold"
        onClick={changeCount}
      >
        Increment
      </button>
    </div>
  );
}

export default footer;
