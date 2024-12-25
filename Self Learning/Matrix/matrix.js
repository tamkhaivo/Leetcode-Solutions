let matrix2D = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let chess = [
  ["P", "E", "E", "P"],
  ["E", "P", "E", "P"],
  ["P", "E", "P", "P"],
  ["P", "E", "P", "E"],
];
let board = [
    ['E', 'P', 'E', 'P'],
    ['P', 'E', 'P', 'E'],
    ['E', 'P', 'E', 'P'],
    ['P', 'E', 'P', 'E']
];
function deleteColumn(matrix, column) {
  for (let row = 0; row < matrix.length; row++) {
    matrix[row].splice(column, 1);
  }
}

function deleteRow(matrix, row) {
  matrix.splice(row, 1);
}
function twoForLoopTraversal(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      console.log(matrix[row][col]);
    }
  }
}
function oneForLoopTraversal(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let output = [];
  while (output.length < rows * cols) {
    output[output.length] = matrix[Math.floor(count / cols)][count % cols];
  }
  return output;
}

function zigZagTraversal(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let row = rows - 1;
  let col = cols - 1;
  let isUp = true;
  let output = [];
  while (output.length < rows * cols) {
    output[output.length] = matrix[row][col];
    if (isUp) {
      if (row == 0) {
        isUp = !isUp;
        col--;
      } else {
        row--;
      }
    } else {
      if (row == rows - 1) {
        isUp = !isUp;
        col--;
      } else {
        row++;
      }
    }
  }
  return output;
}

function transpose(matrix) {
  let rows = matrix.length;
  let cols = rows > 0 ? matrix[0].length : 0;
  let output = [];

  for (let row = 0; row < cols; row++) {
    output[row] = [];
    for (let col = 0; col < rows; col++) {
      output[row][col] = matrix[col][row];
    }
  }
  return output;
}

function reverseTranspose(matrix) {
  const rows = matrix.length;
  const cols = rows > 0 ? matrix[0].length : 0;
  let output = [];

  for (let row = rows - 1; row >= 0; row--) {
    output[cols - row - 1] = [];
    for (let col = cols - 1; col >= 0; col--) {
      output[cols - row - 1][col] = matrix[col][row];
    }
  }
  return output;
}

function reflectOverSecondaryDiagonal(matrix) {
  // Must be a square matrix
  let size = matrix.length;
  let output = [];
  for (let row = 0; row < size; row++) {
    output[row] = [];
    for (let col = 0; col < size; col++) {
      output[row][col] = matrix[size - col - 1][size - row - 1];
    }
  }
  return output;
}

function findAdjacentEmptyCells(matrix) {
  const rows = matrix.length;
  const cols = rows > 0 ? matrix[0].length : 0;
  let output = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] == "E") {
        if (
          (row > 0 && matrix[row - 1][col] == "E") ||
          (row < rows - 1 && matrix[row + 1][col] == "E") ||
          (col > 0 && matrix[row][col - 1] == "E") ||
          (col < cols - 1 && matrix[row][col + 1] == "E")
        ) {
          output.push([row, col]);
        }
      }
    }
  }

  return output;
}

function countSubmatrixCorners(matrix, subMatrixSize, char) {
    const rows = matrix.length;
    const cols = rows > 0 ? matrix[0].length : 0;
    let count = 0;
    for (let row = 0; row < rows - subMatrixSize + 1; row++){
        for (let col = 0; col < cols - subMatrixSize + 1; col++) {
            if (matrix[row][col] == char &&
                matrix[row][col + subMatrixSize - 1] == char &&
                matrix[row + subMatrixSize - 1][col] == char &&
                matrix[row + subMatrixSize - 1][col + subMatrixSize - 1] == char
            ) {
                count++
            }
        }
    }
    return count;
}

function traverseLargesetPath(matrix, startRow, startCol) {
    const rows = matrix.length;
    const cols = rows > 0 ? matrix[0].length : 0;
    const directions = [
        [1, 0],
        [-1,0],
        [0,1],
        [0,-1]
    ]
    let currentMax = matrix[startRow][startCol];
    const path = [currentMax]
    let row = startRow;
    let col = startCol;
    while (true) {
        let newRow = -1;
        let newCol = -1;

        for (const direction of directions) {
            row = row + direction[0];
            col = col + direction[1];
            if (row >= 0 &&
                row < rows &&
                col >= 0 &&
                col < cols &&
                matrix[row][col] > currentMax) {
                    newRow = row;
                    newCol = col;
                    currentMax = matrix[row][col];
                }
        }
        if (newRow == -1 && newCol == -1) {
            break;
        }
        path.push(currentMax);
        row = newRow;
        col = newCol;
    }
    return path;
}

console.log(traverseLargesetPath(matrix2D, 0, 0))