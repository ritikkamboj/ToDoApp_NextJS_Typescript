"use client";

import { ReactNode, useState, createContext, useContext } from "react";

const todoContext = createContext<todoContext | null>(null);

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  date: Date;
};
export type todoContext = {
  todos: Todo[];
  handleAddTodo: (todo: string) => void;
  togglecheckbox: (id: string) => void;
  handledelete: (id: string) => void;
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const newtodos = localStorage.getItem("data");
    return newtodos ? JSON.parse(newtodos) : [];
  });

  function handleAddTodo(todo: string) {
    setTodos((prev) => {
      const newtodos = [
        ...prev,
        {
          id: Math.random().toString(),
          task: todo,
          completed: false,
          date: new Date(),
        },
      ];
      localStorage.setItem("data", JSON.stringify(newtodos));
      return newtodos;
    });
  }

  function togglecheckbox(id: string) {
    setTodos((prev) => {
      const newtodos = prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      localStorage.setItem("data", JSON.stringify(newtodos));

      return newtodos;
    });
  }
  function handledelete(id: string) {
    setTodos((prev) => {
      const newtodos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem("data", JSON.stringify(newtodos));

      return newtodos;
    });
  }

  return (
    <todoContext.Provider
      value={{ todos, handleAddTodo, togglecheckbox, handledelete }}
    >
      {children}
    </todoContext.Provider>
  );
};

export function useTodo() {
  const todocontextvalues = useContext(todoContext);
  if (!todocontextvalues) {
    throw new Error("Context value can't be fetched successfully ");
  }

  return todocontextvalues;
}
