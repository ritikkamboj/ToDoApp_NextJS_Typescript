"use client";
import React from "react";
import { useTodo } from "../store/todos";

function Todolist() {
  const { todos } = useTodo();
  console.log(todos);

  const filterdata = todos;
  return (
    <ul>
      {filterdata.map((todo) => {
        return <li key={todo.id}>{todo.task}</li>;
      })}
    </ul>
  );
}

export default Todolist;
