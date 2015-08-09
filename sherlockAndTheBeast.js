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
    // Start building a string
    var str;

    // Store the modulo of n % 3 and n % 5
    var modThree = n % 3;
    var modFive = n % 5;

    // Logic needs to be heavily refactored here.
    // Control flow is only entering the first condition if string = falsy
    // and if n % 3 returns no remainder. This would mean that we never dive in here
    // if there is ever a remainder.

    // First, let's grab the number of fives.
    var numberOfFives = Math.floor(n/5);
    var numberOfThrees;

    // If the number of fives is divisible by 3, we'll continue:

    if (!str && numberOfFives % 3 === 0) {
      // If the number of fives is exactly N, just return a string of all fives
      if (numberOfFives === n) {
        str = buildString(5, n);
      } else {
        numberOfThrees = (n - numberOfFives);
        if (numberOfThrees && numberOfThrees % 5 === 0) {
          str = buildString(5, numberOfFives) + buildString(3, numberOfThrees)
        } else {
          str = -1;
        }
      }
    }




    if (!str && modThree === 0) {
      if (modThree % 5 === 0) {

        str = buildString(5, numberOfFives) + buildString(3, numberOfThrees);
      } else {
        str = buildString(5, n);
      }
    } else if (!str && modFive === 0) {
      if (modFive % 3 === 0) {
        // build a string of n length consisting of 3s until there's a remainder, and use the remaining slots for 3s
        numberOfThrees = Math.floor(n/3);
        numberOfFives = n - numberOfThrees;

        str = buildString(3. numberOfThrees)

        // EDGE CASE - Will there EVER be a situation other than a string of all threes where threes come before fives?
      } else {
        // Build a string normally with just threes
      }
    } else {
      str = -1;
    }
  }

  // Function to build our string.

  function buildString(value, number) {
    var currentString = '';

    while (number--) {
      currentString += value;
    }

    return currentString;
  }



}