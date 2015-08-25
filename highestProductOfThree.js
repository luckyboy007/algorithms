// Given an array_of_ints, find the highest_product you can get from three of the integers.



var highestOfThree = function(arr) {
  var highestOfThree = arr[0] * arr[1] * arr[2];
  var highestOfTwo = lowestOfTwo = arr[0] * arr[1];
  var highest = Math.max(arr[0], arr[1]);
  var lowest = Math.min(arr[0], arr[1]);

  for (var i = 2; i < arr.length; i++) {
    // Check for highest and lowest number
    highestOfThree = Math.max(highestOfThree, arr[i] * highestOfTwo, arr[i] * lowestOfTwo);
    highestOfTwo = Math.max(highestOfTwo, arr[i] * highest, arr[i] * lowest);
    lowestOfTwo = Math.min(lowestOfTwo, arr[i] * highest, arr[i] * lowest);
    highest = Math.max(highest, arr[i]);
    lowest = Math.min(lowest, arr[i]);
  }

  return highestOfThree;
}