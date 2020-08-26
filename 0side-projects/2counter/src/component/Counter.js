import React, { useState } from "react";

const Counter = () => {
  let [count, setCounter] = useState(0);
  const onButtonClick = () => {
    setCounter(count + 1);
  };
  return (
    <div>
      <button onClick={onButtonClick}> Click me</button>
      <h1>Counter : {count}</h1>
    </div>
  );
};
export default Counter;
