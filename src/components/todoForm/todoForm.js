import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <div className="form_parent">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input_field"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TodoForm;
