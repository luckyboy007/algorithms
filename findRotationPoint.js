// Given a sorted (but rotated) array,
// find the index of the 'rotation point'

// Time complexity: O(log(n));

// Immediate thought: Binary search.

// Input: An array of words.
  // Words are sorted alphabetically,
  // but part of the array is ROTATED,
  // meaning that the first entry is somewhere else
  // within the array.

var findRotationPoint = function(array) {
  // Goal is to perform a binary search through the array.
  // We should find the 'middle' index of this array,
  var middleIndex;
  // and then compare that to the 'first' and 'last'
  // indices of the array.
    // If the 'middle' index is less than the 'first' index,
    // then the rotation point is in the right side!
      // Otherwise, we're going to continue exploring
      // the left side of the array.
}
