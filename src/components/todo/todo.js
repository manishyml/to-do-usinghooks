import React from "react";
import "./todo.css";
const todo = ({ todo, index, deleteTodo }) => {
  return (
    <div className="todo">
      <span className="text">
        <h3>{todo.text}</h3>
        <span className="cross" onClick={e => deleteTodo(index)}>
          +
        </span>
      </span>
    </div>
  );
};

export default todo;
