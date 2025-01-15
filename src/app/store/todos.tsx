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
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

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

      return newtodos;
    });
  }

  return (
    <todoContext.Provider value={{ todos, handleAddTodo }}>
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
