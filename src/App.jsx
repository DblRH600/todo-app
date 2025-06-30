import "./App.css";
import { useState } from "react";
import FilterProvider from './context/FilterContext';
import ThemeProvider from './context/ThemeContext';
import TodoProvider from './context/TodoContext';

import ThemeToggleButton from "./components/ThemeToggleButton";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>
          <div>
            <div className="flex justify-around gap-3">
              <h1 className="mb-4">The ToDo App</h1>
              <ThemeToggleButton />
            </div>

            <div>
              <TodoInput />
              <FilterButtons />
              <TodoList />
            </div>
          </div>
        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
