// item components for to-do list
import { useState, useEffect } from "react";
import { useTodos } from "../context/TodoContext";
import { ArchiveBoxXMarkIcon, CheckBadgeIcon, PencilIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center border rounded-lg p-2">
      <input
      className="w-auto text-pretty"
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleEdit}>
            <CheckBadgeIcon className="w-100% h-6 text-green-500" />
          </button>
        </>
      ) : (
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      )}
      <button onClick={() => setIsEditing(prev => !prev)}>
        <PencilSquareIcon className="w-100% h-5 text-yellow-500"/>
      </button>
      <button onClick={() => deleteTodo(todo.id)}>
        <ArchiveBoxXMarkIcon className="w-100% h-5 text-red-600"/>
      </button>
    </div>
  );
}

export default TodoItem;
