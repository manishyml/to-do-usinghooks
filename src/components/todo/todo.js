import React from "react";

const todo = ({ todo, index, deleteTodo }) => {
  return (
    <div className="todo">
      <span>{todo.text}</span>
      <span onClick={e => deleteTodo(index)}>X</span>
    </div>
  );
};

export default todo;
