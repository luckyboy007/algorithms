// Given an array of integers,
// Find the minimum value X that makes it possible
// to generate a new array sorted in ascending order
// by increasing or decreasing each element of the initial array
// in the 0 to X range.

// Approach:
// We want to do this in the fastest way possible. Can we accomplish this in O(n)?

// First, we'll store X as a variable and start it at 0 (ideally, nothing is changed).
// We'll also keep track of the last element visited
// Now, we'll iterate over the array
  // For each element in the array, find out if adding X to our current value is greater than our last value
    // If it is, we're going to change the 'last value' to equal the current one.
    // If it isn't, we're going to do two things: Increase the last value by one
    // and set our new X value to be equal to the difference of subtracting
    // the last value from our current value.
// At the end, grab the ceiling of dividing X by two and return it.


// Example:
// [5, 4, 3, 2, 8] => 3
// [2, 3, 4, 5, 8]

var buildHill = function(array) {
  var result = 0;
  var lastElement = array[0];

  for (var i = 1; i < array.length; i++) {
    var current = array[i];
    if (current + result > lastElement) {
      lastElement = current;
    } else {
      lastElement++;
      result = lastElement - current;
    }
  }

  return Math.ceil(result / 2);
}
