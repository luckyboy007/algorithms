// Create a function, fib, which takes in an integer N.
// Its output is the exact Fibonacci number at that specific index.
// Assume our Fibonacci sequence begins at 1 and not 0.
  // Therefore: 1, 1, 2, 3, 5, 8, 13, 21... etc

var cache = {};

function fib(n) {
  // If the cache[n] exists, return it
  if (cache[n]) {
    return cache[n];
  }
  // Store the current sum
  var currentSum = cache[cache.largestIndex] || 1;
  var priorNumber = cache[(cache.largestIndex - 1)] || 0;

  // Otherwise, continue from largestIndex until we hit n.

  var i = (cache.largestIndex + 1) || 0;

  for (i; i <= n; i++) {
    var temp = currentSum;
    currentSum += priorNumber;
    priorNumber = temp;
    cache[i] = currentSum;
    cache.largestIndex = i;
  }

  return currentSum;
}