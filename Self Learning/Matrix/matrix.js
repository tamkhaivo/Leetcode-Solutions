let matrix2D = [
  [1, 2],
    [3, 4],
    [5, 6]

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

    for (let row = rows - 1; row >= 0; row--){
        output[cols - row - 1] = [];
        for(let col = cols - 1; col >= 0; col--){
            output[cols - row - 1][col] = matrix[col][row];
        }
    }
    return output;
}

function reflectOverSecondaryDiagonal(matrix) {
    // Must be a square matrix 
    let size = matrix.length;
    let output = [];
    for (let row = 0; row < size; row++){
        output[row] = [];
        for (let col = 0; col < size; col++){
            output[row][col] = matrix[size - col - 1][size - row - 1];
        }
    }
    return output;
}
console.table(matrix2D)
console.table(reflectOverSecondaryDiagonal(matrix2D))