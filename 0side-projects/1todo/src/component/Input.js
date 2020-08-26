import React from "react";

const Input = ({ onFormSubmit, onInputChange, item, onAddClick }) => {
  return (
    <form className="ui form  grid" onSubmit={(event) => onFormSubmit(event)}>
      <div className="ui field row">
        <input
          className="fourteen wide column"
          type="text"
          style={{ margin: "15px", fontSize: "1.7rem" }}
          value={item}
          onChange={onInputChange}
        />
        <button
          className="one column ui positive button"
          style={{ margin: "15px" }}
          onClick={onAddClick}
        >
          Add
        </button>
      </div>
    </form>
  );
};
export default Input;
