// input components for to-do list
import { useState, useEffect } from "react";
import { useTodos } from "../context/TodoContext";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

function TodoInput() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="my-4">
      <h2 className="mb-3 text-lg italic font-semibold">To-Do Inputs</h2>
      <form
        className="flex justify-between items-center gap-2"
        onSubmit={handleSubmit}
      >
        <input
          className="border rounded w-full p-3"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a To-Do..."
        />
        <button type="submit">
          <PlusCircleIcon className="w-full h-10 text-blue-600" />
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
