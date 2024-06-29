import React from "react";
import { useGrid } from "../context/grid";
import { convertGridIntoRows } from "../lib/utils";

export default function GridTable() {
  const [{ gridCols, renderCount }, {setRenderCount}] = useGrid();
  console.log({ gridCols });

  const gridRows = convertGridIntoRows(gridCols);
  console.log({ gridRows });

  return (
    <div>
      <table id="gridTable">
        <tbody>
          {gridRows.map((row, index) => {
            return (
              <tr key={index} data-index={index}>
                {row.map((cell, index) => {
                  return <td key={index} data-index={index}>{cell}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={()=>{
        setRenderCount((prev) => prev +1 );
      }} className="p-3 mt-3 border rounded shadow">Render {renderCount}</button>
    </div>
  );
}
