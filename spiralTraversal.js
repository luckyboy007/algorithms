// Given a M x N matrix, traverse it in a spiral formation from upper left to center,
// logging out each element as you go along.

// Sample input:
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

// Sample output:
// 1, 2, 3, 6, 9, 8, 7, 4, 5

// Approach:
// We're going to iterate through our matrix, logging out each element.
// We need to know four boundaries:
// minRow, maxRow, minCol, maxCol
// These four boundaries will help us manage where we traverse

// While minRow is less than or equal to maxRow (and same for minCol and maxCol),
// we're going to traverse.
  // The first stage in traversal is top left to top right.
  // We'll iterate from our minCol to our maxCol, printing out values from our minRow.
  // At the end, we'll increase minRow by one.

  // Then, we'll iterate from top right to bottom right.
  // Here, we're going to begin at minRow until we hit maxRow, printing out values from our maxCol
  // At the end, we'll decrease maxCol by one.

  // Now we'll iterate from bottom right to bottom left.
  // This begins at maxCol and ends at minCol, printing out values from maxRow.
  // At the end, we're decreasing maxRow by one.

  // Now it's time to go from bottom left to top left.
  // Go from maxRow to minRow, printing out values from minCol
  // Finally, we're increasing minCol by one.


var spiralTraversal = function(matrix) {
  var minRow = 0;
  var maxRow = matrix.length;
  var minCol = 0;
  var maxCol = matrix[0].length;

  while (minRow <= maxRow && minCol <= maxCol) {

    for (var i = minCol; i <= maxCol; i++) {
      console.log(matrix[minRow][i]);
    }
    minRow++;

    for (i = minRow; i <= maxRow; i++) {
      console.log(matrix[i][maxCol]);
    }
    maxCol--;

    for (i = maxCol; i >= minCol; i--) {
      console.log(matrix[maxRow][i]);
    }
    maxRow--;

    for (i = maxRow; i >= minRow; i--) {
      console.log(matrix[i][minCol]);
    }
    minCol++;
  }
}