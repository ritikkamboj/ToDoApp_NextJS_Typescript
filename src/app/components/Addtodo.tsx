"use client";

import { FormEvent, useState } from "react";
import { useTodo } from "../store/todos";

function Addtodo() {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodo();

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAddTodo(todo);

    setTodo("");
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter the Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Addtodo;
