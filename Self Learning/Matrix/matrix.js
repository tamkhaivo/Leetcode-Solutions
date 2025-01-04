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
  ["E", "P", "E", "P"],
  ["P", "E", "P", "E"],
  ["E", "P", "E", "P"],
  ["P", "E", "P", "E"],
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
  for (let row = 0; row < rows - subMatrixSize + 1; row++) {
    for (let col = 0; col < cols - subMatrixSize + 1; col++) {
      if (
        matrix[row][col] == char &&
        matrix[row][col + subMatrixSize - 1] == char &&
        matrix[row + subMatrixSize - 1][col] == char &&
        matrix[row + subMatrixSize - 1][col + subMatrixSize - 1] == char
      ) {
        count++;
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
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let currentMax = matrix[startRow][startCol];
  const path = [currentMax];
  let row = startRow;
  let col = startCol;
  while (true) {
    let newRow = -1;
    let newCol = -1;

    for (const direction of directions) {
      row = row + direction[0];
      col = col + direction[1];
      if (
        row >= 0 &&
        row < rows &&
        col >= 0 &&
        col < cols &&
        matrix[row][col] > currentMax
      ) {
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
function findNegativeNumbersDiagonalTraversal() {
  const matrix = [
    [1, -2, 3, -4],
    [5, -6, 7, 8],
    [-9, 10, -11, 12],
  ];

  const rows = matrix.length;
  const cols = rows > 0 ? matrix[0].length : 0;
  const solution = [];
  const traversal = [];
  let row = 0;
  let col = 0;
  let traverseUp = true;
  while (traversal.length < rows * cols) {
    traversal[traversal.length] = matrix[row][col];
    if (matrix[row][col] < 0) {
      solution.push([row + 1, col + 1]);
    }
    if (traverseUp) {
      if (row - 1 < 0) {
        traverseUp = !traverseUp;
        col++;
      } else if (col + 1 >= cols) {
        traverseUp = !traverseUp;
        row++;
      } else {
        col++;
        row--;
      }
    } else {
      if (col - 1 < 0) {
        traverseUp = !traverseUp;
        row++;
      } else if (row + 1 >= rows) {
        traverseUp = !traverseUp;
        col++;
      } else {
        col--;
        row++;
      }
    }
  }
  console.log(traversal);
  console.log(solution); // Output: [[1, 2], [3, 1], [2, 2], [1, 4], [3, 3]]
}

function traverseClockwiseSprialPath() {
  const matrix = [
    ["a", "b", "c", "d"],
    ["e", "f", "g", "h"],
    ["i", "j", "k", "l"],
  ];

  const rows = matrix.length;
  const cols = rows > 0 ? matrix[0].length : 0;
  const traverse = [];
  const solution = [];
  let row = 0;
  let col = 0;

  const visited = new Array(rows)
    .fill(null)
    .map(() => new Array(cols).fill(false));

  const Direction = {
    UP: "UP",
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
  };
  let movement = Direction.RIGHT;

  while (traverse.length < rows * cols) {
    traverse[traverse.length] = matrix[row][col];
    visited[row][col] = true;

    switch (matrix[row][col]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        solution.push(traverse.length);
        break;
      default:
        break;
    }

    switch (movement) {
      case Direction.RIGHT:
        if (col + 1 >= cols || visited[row][col + 1]) {
          movement = Direction.DOWN;
          row++;
        } else {
          col++;
        }
        break;
      case Direction.LEFT:
        if (col - 1 < 0 || visited[row][col - 1]) {
          movement = Direction.UP;
          row--;
        } else {
          col--;
        }
        break;
      case Direction.DOWN:
        if (row + 1 >= rows || visited[row + 1][col]) {
          movement = Direction.LEFT;
          col--;
        } else {
          row++;
        }
        break;
      case Direction.UP:
        if (row - 1 < 0 || visited[row - 1][col]) {
          movement = Direction.RIGHT;
          col++;
        } else {
          row--;
        }
        break;
    }
  }
  console.log(traverse);
  console.log(solution); //[1, 9, 10]
}

function interleaveMatrices() {
  const matrixA = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];

  const matrixB = [
    [11, 12, 13],
    [14, 15, 16],
    [17, 18, 19],
  ];

  const submatrixCoords = [
    [2, 3, 2, 3],
    [1, 2, 1, 2],
  ];

  let rowAStart = submatrixCoords[0][0];
  let rowAEnd = submatrixCoords[0][1];
  let colAStart = submatrixCoords[0][2];
  let colAEnd = submatrixCoords[0][3];

  let rowBStart = submatrixCoords[1][0];
  let rowBEnd = submatrixCoords[1][1];
  let colBStart = submatrixCoords[1][2];
  let colBEnd = submatrixCoords[1][3];

  let row = rowAEnd - rowAStart + (rowBEnd - rowBStart);
  let col = colAEnd - colAStart + 1 + (colBEnd - colBStart + 1);

  let result = new Array(row).fill(null).map(() => new Array(col));

  for (let row = 0; row < rowAEnd - rowAStart + 1; row++) {
    for (let col = 0; col < colAEnd - colAStart + 1; col++) {
      result[row][col * 2] = matrixA[row + rowAStart - 1][col + colAStart - 1];
    }
  }
  for (let row = 0; row < rowBEnd - rowBStart + 1; row++) {
    for (let col = 0; col < colBEnd - colBStart + 1; col++) {
      result[row][col * 2 + 1] =
        matrixB[row + rowBStart - 1][col + colBStart - 1];
    }
  }
  console.log(result);
  return result;
}

function execute() {
  let matrixA = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  let matrixB = [
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [25, 26, 27, 28],
    [29, 30, 31, 32],
  ];

  let n = 2;
  console.log(matrixBoundaryConcatenation(matrixA, matrixB, n));

  function matrixBoundaryConcatenation(matrixA, matrixB, n) {
    const result = [];

    // Helper function to traverse the boundary of a single matrix
    function traverseMatrixBoundary(matrix, layers) {
      const rows = matrix.length;
      const cols = matrix[0].length;
      const boundaryValues = [];

      for (let layer = 0; layer < layers; layer++) {
        // Top row (left to right)
        for (let col = layer; col < cols - layer; col++) {
          boundaryValues.push(matrix[layer][col]);
        }
        // Right column (top to bottom)
        for (let row = layer + 1; row < rows - layer; row++) {
          boundaryValues.push(matrix[row][cols - layer - 1]);
        }
        // Bottom row (right to left)
        for (let col = cols - layer - 2; col >= layer; col--) {
          boundaryValues.push(matrix[rows - layer - 1][col]);
        }
        // Left column (bottom to top)
        for (let row = rows - layer - 2; row > layer; row--) {
          boundaryValues.push(matrix[row][layer]);
        }
      }

      return boundaryValues;
    }

    // Traverse each matrix's boundary up to n layers
    result.push(...traverseMatrixBoundary(matrixA, n));
    result.push(...traverseMatrixBoundary(matrixB, n));

    return result;
  }
}
function submatrixSwap(matrix, coord_S1, coord_S2) {
  let M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];

  let coordS1 = [0, 2, 2, 4];
  let coordS2 = [2, 4, 0, 2];

  const rows = matrix.length;
  const cols = rows > 0 ? matrix[0].length : 0;
  const result = [];
  const traverse = [];
  let row = 0;
  let col = 0;
  let [upperRow1, bottomRow1, leftCol1, rightCol1] = coord_S1;
  let [upperRow2, bottomRow2, leftCol2, rightCol2] = coord_S2;
  let rowMatrix = [];

  while (traverse.length < rows * cols) {
    traverse[traverse.length] = matrix[row][col];

    if (
      upperRow1 <= row &&
      row <= bottomRow1 &&
      leftCol1 <= col &&
      col < rightCol1
    ) {
      rowMatrix.push(
        matrix[row + (upperRow2 - upperRow1)][col + (leftCol2 - leftCol1)]
      );
    } else if (
      upperRow2 <= row &&
      row <= bottomRow2 &&
      leftCol2 <= col &&
      col < rightCol2
    ) {
      rowMatrix.push(
        matrix[row - (upperRow2 - upperRow1)][col - (leftCol2 - leftCol1)]
      );
    } else {
      rowMatrix.push(matrix[row][col]);
    }
    if (traverse.length % cols == 0) {
      result.push(rowMatrix);
      rowMatrix = [];
    }
    col++;
    if (col % cols == 0) {
      col = 0;
      row++;
    }
  }
  return result;
}
