import { createContext, useContext, useState } from "react";

export const GridContext = createContext(null);
export const GridDispatchContext = createContext(null);

const numCols = 20;
const numRows = 15;

const initialValue = Array.from({ length: numCols }, (z,index) => Array(numRows).fill(index+1));



export function GridProvider({ children }) {
  const [gridCols, setGridCols] = useState(initialValue);

  const states = {
    gridCols,
  };

  const updateStateFunctions = {
    setGridCols,
  };

  return (
    <GridContext.Provider value={states}>
      <GridDispatchContext.Provider value={updateStateFunctions}>
        {children}
      </GridDispatchContext.Provider>
    </GridContext.Provider>
  );
}

export function useGrid() {
  const states = useContext(GridContext);
  const updateStateFunctions = useContext(GridDispatchContext);
  return [ states, updateStateFunctions ];
}
