import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="flex items-center gap-2 px-2 py-2 rounded shadow bg-slate-200 dark:bg-slate-700 dark:text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <>
          <MoonIcon className="w-5 h-5" />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <SunIcon className="w-5 h-5" />
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
}

export default ThemeToggleButton;
