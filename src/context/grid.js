import { createContext, useContext, useEffect, useRef, useState } from "react";
import { getPattern } from "../lib/utils";

export const GridContext = createContext(null);
export const GridDispatchContext = createContext(null);

const numCols = 20;
const numRows = 15;

const initialValue = Array.from({ length: numCols }, (z, index) =>
  Array(numRows).fill(0)
);

export function GridProvider({ children }) {
  const [gridCols, setGridCols] = useState(initialValue);
  const [renderCount, setRenderCount] = useState(1);
  const [batchIndex, setBatchIndex] = useState(0);

  const renderFrameTimeOut = useRef();
  const batchTimeOut = useRef();

  useEffect(() => {
    const newPattern = getPattern(gridCols, batchIndex);
    setGridCols(newPattern);
  }, [renderCount]);

  useEffect(() => {
    renderFrameTimeOut.current = setInterval(() => {
      setRenderCount((prev) => prev +1);
    }, 100);

    return () => {
      clearInterval(renderFrameTimeOut)
    }
  }, []);

  useEffect(() => {
    batchTimeOut.current = setInterval(() => {
      setBatchIndex((prev) => prev +1);
    }, 3000);

    return () => {
      clearInterval(batchTimeOut)
    }
  }, []);

  const states = {
    gridCols,
    renderCount,
    batchIndex,
  };

  const updateStateFunctions = {
    setGridCols,
    setRenderCount,
    setBatchIndex,
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
  return [states, updateStateFunctions];
}
