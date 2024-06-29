import React from "react";
import { useGrid } from "../context/grid";
import { convertGridIntoRows } from "../lib/utils";

export default function GridTable() {
  const [{ gridCols }] = useGrid();
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
    </div>
  );
}
