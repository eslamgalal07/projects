import React from "react";
import ListItem from "./ListItem";
const TodoList = ({ list, onRemoveClick }) => {
  const renderedList = list.map((item, i) => {
    return (
      <ListItem key={i} item={item} index={i} onRemoveClick={onRemoveClick} />
    );
  });
  return <ol className="todo-list">{renderedList}</ol>;
};
export default TodoList;
