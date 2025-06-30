// components for to-do list
import { useState, useEffect } from "react";
import { useTodos } from "../context/TodoContext";
import { useFilter } from "../context/FilterContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodos();
  const { filter } = useFilter();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="flex flex-col gap-2 my-3 content-center">
      {filteredTodos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
