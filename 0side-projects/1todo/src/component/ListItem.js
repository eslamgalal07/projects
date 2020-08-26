import React from "react";

const ListItem = ({ item, index, onRemoveClick }) => {
  return (
    <li className="ui grid">
      <h2 className="ten wide column">{item}</h2>
      <button
        className=" ui one wide column red  button  "
        style={{ margin: "15px" }}
        onClick={() => onRemoveClick(index)}
      >
        remove
      </button>
    </li>
  );
};

export default ListItem;
