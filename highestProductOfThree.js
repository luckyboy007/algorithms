// Given an array_of_ints, find the highest_product you can get from three of the integers.

var highestOfThree = function(arr) {
  // Sort the array
  var sortedArr = arr.sort(function(a, b) {
    return a - b;
  })

  // If any of the items are less than
  // Keep only the last three (the largest three)
  sortedArr = sortedArr.slice(arr.length-3)

  // Return the product of all three.
  return sortedArr.reduce(function(a, b){
    return a * b;
  })
}