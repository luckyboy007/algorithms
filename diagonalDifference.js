// Given an N x N matrix, find the absolute difference between the sum of the two main diagonals (0, 0 to N, N and 0, N to N, 0)

// Input: A string. The first line of the string = N. After that, N lines with N numbers within them, consisting of the matrix.

function diagonalDifference(input) {
  // Find the first line break index:
  var breakPoint = input.indexOf('\n');
  // Set N, which would be the digits right before the break point
  var n = parseInt(input.slice(0, breakPoint));
  // Slice the first line away from our string
  var remainingInput = input.slice((breakPoint + 1));
  // Set a matrix
  var matrix = [];

  // Let's split this string using our line break.
  var flattenedArray = remainingInput.split('\n');
  // Then we can iterate over this flattened array and split it further:
  flattenedArray.forEach(function(elem) {
    matrix.push(elem.split(' '));
  })

  // Now we can calculate the two points.
  function calculateSum(row, column, direction, sum) {
    if (row === n) {
      return sum;
    }

    sum += parseInt(matrix[row][column]);

    row++;
    direction === 'left' ? column++ : column--;

    return calculateSum(row, column, direction, sum);
  }

  console.log(Math.abs(calculateSum(0, 0, 'left', 0) - calculateSum(0, (n - 1), 'right', 0)));
}