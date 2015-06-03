// We are given an array of all integers.
// For each index of that array, find the product of every other index.
// Constraints: Linear time, linear space
// Example input: [1, 7, 3, 4]
// Example output: [84, 12, 28, 21]
  // This is obtained by calculating: [7*3*4, 1*3*4, 1*7*4, 1*7*3]
// Edge cases:
  // Zeroes can exist in the array
  // Numbers do not have to be unique
  // Division is not allowed!!!


// The naive solution

var getAllProducts = function(arr) {
  var resultsArr = [];

  arr.forEach(function(elem, index) {
    var product = 1;
    arr.forEach(function(innerElem, innerIndex) {
      // If we're at the last index
      if (innerIndex === (arr.length - 1)) {
        // Check to see if our inner and outer elements are the same
        if (innerElem === elem) {
          // If yes, push the product to the array.
          resultsArr.push(product);
        } else {
          // If no, push the product * innerElem to the array.
          resultsArr.push(product*innerElem);
        }
      }
      // Otherwise, if we are not at the last index AND if the indices DON'T match
      else if (innerIndex !== index) {
        product = product * innerElem;
      }
    })
  })
  return resultsArr;
}
