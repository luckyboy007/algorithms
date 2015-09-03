// Given an array of numbers and an integer X,
// grab each list of X consecutive elements and
// obtain each deviation (the difference between the largest and smallest values).
// Then, return the maximum value among all medians.

// Approach:
// We keep track of four values during iteration:
  // Maximum Deviation (we return this number at the end)
  // firstNumber
  // secondNumber
  // thirdNumber
// At each iteration, we:
  // Replace the firstNumber with the second and third
  // Replace the third number with the new number
  // Calculate the difference between the highest and lowest
  // using Math.max and Math.min
  // Replace the Maximum Deviation if it's smaller than this difference

var getMaximumDifference = function(a, b, c) {
  return Math.max(a, b, c) - Math.min(a, b, c)
}

var deviation = function(array) {
  var first = array[0];
  var second = array[1];
  var third = array[2];

  var max = getMaximumDifference(first, second, third);


  for (var i = 3; i < array.length; i++) {
    first = second;
    second = third;
    third = array[i];

    var newDeviation = getMaximumDifference(first, second, third);

    if (newDeviation > max) {
      max = newDeviation;
    }
  }

  return max;
}