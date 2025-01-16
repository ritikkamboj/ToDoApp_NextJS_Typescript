"use client";
import React from "react";
import { useTodo } from "../store/todos";
import { useSearchParams } from "next/navigation";
import { todo } from "node:test";

function Todolist() {
  const { todos, togglecheckbox, handledelete } = useTodo();
  const searchparams = useSearchParams();
  const state = searchparams.get("todo");
  console.log(todos);

  let filterdata = todos;

  if (state === "active") {
    filterdata = filterdata.filter((task) => !task.completed);
  }

  if (state === "completed") {
    filterdata = filterdata.filter((task) => task.completed);
  }

  return (
    <ul>
      {filterdata.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onClick={() => togglecheckbox(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

            {todo.completed && (
              <button type="button" onClick={() => handledelete(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Todolist;
