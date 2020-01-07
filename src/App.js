import React, { useState } from "react";
import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
  const deleteTodo = indexToDelete => {
    const arr = [...todos];
    const newArr = arr.filter((item, index) => index !== indexToDelete);
    //hey
    setTodos(newArr);
  };
  return (
    <div className="App">
      <h1 className="heading">ADD TO DO LIST</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo_container">
        <TransitionGroup className="item_container">
          {todos.map((item, index) => (
            <CSSTransition key={index} timeout={500} classNames="move">
              <Todo
                key={index}
                index={index}
                todo={item}
                deleteTodo={deleteTodo}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;
