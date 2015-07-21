// Given an array containing integer values, we need to print the fraction of count of positive numbers, negative numbers, and zeroes to the total numbers.
// Print the value of the fractions correct to three decimal places.

// Input: A string. The first like is N. The next line contains N integers, space separated.

// Output: Three values, on different lines, equal to the fraction count of positive numbers, negative numbers, and zeroes to the total numbers.

function plusMinus(input) {
  // First, let's grab N. We'll find where the line break is:
  var breakPoint = input.indexOf('\n');
  // Now, let's get N
  var n = parseInt(input.slice(0, breakPoint));
  // Then, we'll separate the rest of the line:
  var remainingInput = input.slice((breakPoint + 1));
  // Now, let's split the remaining line into an array:
  var remainingArr = remainingInput.split(' ');
  // Let's use an object to store the count of positive, negative, and zeroes:
  var numbersObj = {
    positive: 0,
    negative: 0,
    zero: 0
  }

  // Iterate over our array
  remainingArr.forEach(function(elem) {
    var num = parseInt(elem)
    if (num === 0) {
      numbersObj.zero++;
    } else if (num > 0) {
      numbersObj.positive++;
    } else if (num < 0) {
      numbersObj.negative++;
    }
  });

  for (var key in numbersObj) {
    numbersObj[key] = (numbersObj[key]/n).toFixed(3);
  }

  console.log(numbersObj.positive + '\n' + numbersObj.negative + '\n' + numbersObj.zero)
}