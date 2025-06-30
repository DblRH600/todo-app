import { useState, useEffect } from "react";
import { useFilter } from "../context/FilterContext";

function FilterButtons() {
  const { filter, setFilter } = useFilter();
  console.log("Filter context:", useFilter());

  return (
    <div className="flex justify-around my-4">
      <p>Filter:</p>
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        disabled={filter === "active"}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        disabled={filter === "completed"}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
