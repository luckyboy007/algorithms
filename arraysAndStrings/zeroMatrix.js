// Given a matrix, write an algorithm that traverses said matrix.
// If the algorithm finds a 0 within the matrix, it should replace all
// the elements in the row and column that the 0 is found in
// to all equal 0

// Naive solution:
// Create some sort of data structure to store the list of zeroes.
  // For now, let's make this an array of arrays -- a bucket containing tuples.
// Iterate over our matrix
  // Whenever we find a zero, note the column and row.
// Now, iterate over our bucket
  // For every row/column, we replace said row/column in our matrix with zeroes

// Optimization:
  // Just create an array containing two arrays: The first is rows, the second is columns.

var zeroMatrix = function(matrix) {
  var rows = {};
  var columns = {};

  var zeroOut = function(rowOrColumn, index) {
    if (rowOrColumn === 'row') {
      for (var i = 0; i < matrix[index].length; i++) {
        matrix[index][i] = 0;
      }
    } else {
      for (i = 0; i < matrix.length; i++) {
        matrix[i][index] = 0;
      }
    }
  }

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }

  for (var key in rows) {
    console.log(key);
    zeroOut('row', parseInt(key));
  }

  for (key in columns) {
    zeroOut('column', parseInt(key));
  }

  return matrix;
}