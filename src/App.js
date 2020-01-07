import React, { useState } from "react";
import "./App.css";
import Todo from "./components/todo/todo";
import TodoForm from "./components/todoForm/todoForm";

function App() {
  const [todos, setTodos] = useState([
    { text: "Open Laptop" },
    { text: "Click on google chrome" },
    { text: "Search for react-hooks" }
  ]);
  const addTodo = text => {
    const arr = [...todos, { text }];
    setTodos(arr);
  };
  const deleteTodo = index => {
    const arr = [...todos];
    arr.splice(index, 1);
    //hey
    setTodos(arr);
  };
  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      {todos.map((item, index) => (
        <Todo key={index} index={index} todo={item} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default App;
