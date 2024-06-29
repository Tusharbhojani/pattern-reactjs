import React from "react";
import { useGrid } from "../context/grid";
import { convertGridIntoRows, getColorForCell } from "../lib/utils";

export default function GridTable() {
  const [
    { gridCols, renderCount, batchIndex },
    { setRenderCount, setBatchIndex },
  ] = useGrid();

  const gridRows = convertGridIntoRows(gridCols);

  return (
    <div>
      <div className="fixed inset-0 overflow-scroll flex items-center justify-center bg-black">
        <table id="gridTable">
          <tbody>
            {gridRows.map((row, index) => {
              return (
                <tr key={index} data-index={index}>
                  {row.map((cellValue, index) => {
                    return (
                      <td
                        key={index}
                        data-index={index}
                        style={{ backgroundColor: getColorForCell(cellValue) }}
                      >
                        {/* {cellValue} */}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="hidden">
        <button
          onClick={() => {
            setRenderCount((prev) => prev + 1);
          }}
          className="p-2 mt-3 border rounded shadow"
        >
          Render {renderCount}
        </button>

        <div className="flex gap-2 items-center">
          <p>Current Batch {batchIndex}</p>
          <button
            className="p-2 mt-3 border rounded shadow "
            onClick={() => {
              setBatchIndex((prev) => prev + 1);
            }}
          >
            Increase Batch
          </button>
        </div>
      </div>
    </div>
  );
}
