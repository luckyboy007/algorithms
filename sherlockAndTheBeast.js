// Given an input, N, find the largest Decent Number having N digits.

// A Decent Number has 3, 5, or both as its digits. No other digit is allowed
// The number of times 3 appears is divisible by 5
// The number of times 5 appears is divisible by 3

// Input: A string separated by line breaks. The first line will contain T, an integer, which is the number of test cases
  // It is followed by T lines, each containing an integer N (the number of digits in the number)

// Output: The largest Decent Number, having N digits. If no such number exists, your output is -1.

function sherlockAndTheBeast(string) {
  // Split the string into an array by line break
  var arr = string.split('\m');

  // Grab T
  var t = parseInt(arr[0]);

  // Store results in a string
  var results = '';

  // Iterate from 1 to T
  for (var i = 1; i <= t; i++) {
    // Grab N
    var n = parseInt(arr[i]);

    // Pass in N to our helper function
    results += checkNumber(n) + '\n'
  }

  function checkNumber(number) {
    if (number > 3) {
      return -1;
    } else {
      if (n % 3 === 0) {
        buildString(5, number);
      } else if (n % 5 === 0) {
        buildString(3, number);
      }
    }
  }

  // Add a large number of X
  function buildString(number, length) {
    var string = '';
    while (length) {
      string += number;
    }
  }
}