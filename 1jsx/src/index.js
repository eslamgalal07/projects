// import React , ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// create Component
const App = () => {
  const labelText = "Name : ";
  const buttonText = { text: "Click on me! " };
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button type="submit" style={{ background: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

//  take  Component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
