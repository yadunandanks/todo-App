import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    }
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <div>
        <h1>Simple Todo App</h1>
        <input
          type="text"
          value={input}
          placeholder="...enter your todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>ADD</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>Remove</button>{" "}
              {/* Changed 'onChange' to 'onClick' */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
