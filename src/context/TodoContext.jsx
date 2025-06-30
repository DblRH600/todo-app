import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";

// (1) create new context for todo list handling
export const TodoContext = createContext([]);

// local storage interaction
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

// utilizing useReducer state to maandge to-do actions
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT":
      return state.map((todo) => 
      todo.id === action.id ? { ...todo, text: action.newText } : todo);
    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

function TodoProvider({ children }) {
  // (2) set the context's stat & logic
  const [todos, dispatch] = useReducer(reducer, initialState);

  const addTodo = (text) => dispatch({ type: "ADD", text });
  const toggleTodo = (id) => dispatch({ type: "TOGGLE", id });
  const deleteTodo = (id) => dispatch({ type: "DELETE", id });
  const editTodo = (id, newText) => dispatch({ type: "EDIT", id, newText });
  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;

export const useTodos = () => useContext(TodoContext);
