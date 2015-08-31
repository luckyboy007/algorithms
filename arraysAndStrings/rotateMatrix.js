// Given an NxN matrix, rotate it 90 degrees to the right.
// For example, a matrix of:
/*
  [[1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]]

  Would rotate to:

  [[7, 4, 1],
   [8, 5, 2],
   [9, 6, 3]]
*/

// Extra credit: Can we rotate this matrix in place -- that is, without any additional data structures?
// Extra credit: Can we refactor to deal wtih rectangular arrays as well?
// Extra credit: Can we refactor to rotate both clockwise and counterclockwise?


// Naive approach:
  // Patterns recognized:
    // The bottom left element is now on the top left [Last, 0] -> [0, 0]
    // The top left element is now on the top right [0, 0] -> [0, Last]
    // The top right element is now on the bottom right [0, last] -> [last, last]
    // The bottom right element is now on the bottom left [last, last] -> [last, 0]
  // We're going to create a results matrix to store our new matrix
  // Then, iterate across the matrix
    // In this iteration, we'll iterate across each specific row
    // Now, we're going to place that value in a specific area of our results matrix
  // Return our results matrix


var rotateMatrix = function(matrix) {
  var results = [];

  for (var i = 0; i < matrix.length; i++) {
    results[i] = [];
    for (var j = 0; j < matrix[i].length; j++) {
      // Set a specific part of our results matrix equal to this current value
      results[i][j] = matrix[matrix.length - j - 1][i];
    }
  }

  return results;
}