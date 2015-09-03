// Given two integers, write an algorithm that returns the number of
// perfect squares within this range. Assume that the numbers given are
// not included within this range.

// For example, a range of 2, 20 would return 3 (4, 9, 16 are perfect squares)

// Approach
// Create a counter to store the number of perfect squares
// Regardless, we're iterating from the first number to the last number
  // At each number, we need to grab the square root.
    // If the square root modulo 1 does not contain a remainder, it is a perfect square
    // Otherwise, ignore it.
// Return our counter at the end.

var perfectSquares = function(x, y) {
  var counter = 0;

  for (var i = x + 1; i < y; i++) {
    Math.sqrt(i) % 1 === 0 && counter++;
  }

  return counter;
}