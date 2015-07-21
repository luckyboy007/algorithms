// Given an array of integers at size N, print the sum of the elements.

// Input: A two-line string. The first character in the first line is N. The second line consists of space-separated values to be summed.

function veryBigSum(input) {
  // Store N into a variable
  var n = input.charAt[0];
  // Slice the first line from the input
  var remainingInput = input.slice(2);

  var result = remainingInput.split(' ').reduce(function(a, b) {
    return parseInt(a) + parseInt(b);
  })

  return result;
}