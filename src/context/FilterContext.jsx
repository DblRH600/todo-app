import { createContext, useContext, useState, useEffect } from "react";

// (1) create new context for filter handling
export const FilterContext = createContext([]);

function FilterProvider({ children }) {
  const [filter, setFilter] = useState("all");

  // const placeFilter = (filter) => {
  //     setFilters([...filters, filter])
  // }

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter is not contained within the FilterProvider");
  }
  return context;
};
