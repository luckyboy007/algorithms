// Given a sorted (but rotated) array,
// find the index of the 'rotation point'

// Time complexity: O(log(n));

// Immediate thought: Binary search.

// Input: An array of words.
  // Words are sorted alphabetically,
  // but part of the array is ROTATED,
  // meaning that the first entry is somewhere else
  // within the array.

var findRotationPoint = function(arr) {
  // Goal is to perform a binary search through the array.
  // We should find the 'middle' index of this array,
  var middleIndex = Math.floor(arr.length/2);
  var leftIndex = arr[0];
  var rightIndex = arr.length - 1;
  // and then compare that to the 'first' and 'last'
  // indices of the array.
    // If the 'middle' index is less than the 'first' index,
    // then the rotation point is in the right side!
      // Otherwise, we're going to continue exploring
      // the left side of the array.
  var recurse = function(leftIndex, rightIndex, middleIndex) {
    // If we are at the rotation point, return it.
    if (arr[middleIndex] < arr[middleIndex - 1]) {
      return middleIndex;
    } else {
      // If the middle index is less than the left index, then we check to the left.
      if (arr[middleIndex] < arr[leftIndex]) {
        recurse(leftIndex, (middleIndex - 1), (Math.floor(middleIndex/2)));
      } else {
        // If the middle index is greater than the left index, then we check to the right
        recurse((middleIndex + 1), rightIndex, )
      }
    }
  }
}
