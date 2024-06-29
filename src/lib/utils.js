import { generateShade } from "./color";

export function convertGridIntoRows(grid) {
  if (grid.length === 0) return [];

  const numCols = grid.length;
  const numRows = grid[0].length;

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(new Array(numCols).fill(i + 1));
  }

  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      rows[row][col] = grid[col][row];
    }
  }

  return rows;
}

function randomBoolean() {
  const randomNumber = Math.random();
  return randomNumber <= 0.1;
}

function areLaneIsClear(col, offset) {
  for (let i = 0; i < offset; i++) {
    if (col[i] !== 0) {
      return false;
    }
  }

  return true;
}

function shiftTheColumn(col) {
  const newCol = [...col];
  // push the new element
  const realIndex = newCol[0] % 10;
  if (realIndex > 1) {
    newCol.unshift(newCol[0] - 1);
  } else {
    newCol.unshift(0);
  }

  newCol.pop(); // Remove the last element

  return newCol;
}

export function getPattern(gridCols, batchIndex) {
  const newCols = [];

  for (let i = 0; i < gridCols.length; i++) {
    const col = gridCols[i];

    // shift the grid
    const newCol = shiftTheColumn(col);

    const isToIgnite = randomBoolean();
    if (isToIgnite) {
      // if first 10 elements are empty, then ignite fire

      const isReadyToIgnite = areLaneIsClear(col, 10);
      if (isReadyToIgnite) {
        const currentLayer = 10 * batchIndex;
        newCol[0] = currentLayer + 5;
      }
    }

    newCols[i] = newCol;
  }

  return newCols;
}

export function getColorForCell(number) {
  if (number === 0) {
    return "#000000"; // white
  }

  const batchIndex = Math.floor(number / 10);
  const shadeIndex = number % 10;

  return generateShade(batchIndex, shadeIndex); //
}
