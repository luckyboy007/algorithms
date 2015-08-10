// Given an array_of_ints, find the highest_product you can get from three of the integers.

var highestOfThree = function(arr) {
  // No need to sort the array. We'll iterate.
  // Let's store the highest product of three:
  var highest = 1;

  // Now, we'll also store the lowest non-negative number
  var lowestNonNegative;

  // We'll also store the lowest negative number
  var lowestNegative;

  // Additionally, a counter to make sure we're at exactly three numbers
  var counter = 0;

  arr.forEach(function(elem) {
    if (counter > 3) {
      highest *= elem;
      if ((!lowestNonNegative && elem >= 0) || (lowestNonNegative < elem && elem >= 0)) {
        lowestNonNegative = elem;
      }
      if (!lowestNegative && elem < 0) {
        lowestNegative = elem;
      }
      conter++;
    } else {
      if ()
    }
  })
}