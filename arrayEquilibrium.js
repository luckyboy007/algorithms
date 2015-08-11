function solution(A) {
  // Store the index
  var result = -1;

  // Preprocess the array.
  var preProcessedArray = [];
  var sum = 0;

  // Loop through the array once. Let's get the sum of all numbers that come before it.
  A.forEach(function(elem) {
    sum += elem;
    preProcessedArray.push(sum);
  })

  // Capture the greatest sum

  // Now that I have an element of pre-processed sums, I can loop through it

  for (var i = 0; i < (preProcessedArray.length); i++) {
    // If the sum at the element right before this one is equal to the sum of the last element of the array
    // after having subtracted the current element, set result to index
    if (preProcessedArray[(i - 1)] === (sum - (A[i]))) {
      result = i;
    }
  }
  return result;
}