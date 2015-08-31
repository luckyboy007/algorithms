// Given a string, write an algorithm to determine if the
// string is a permutation of a palindrome.

// This looks like a multi-part problem:
  // First, we need to somehow grab all the characters in the string
  // Then, we need to make sure that they all appear in the palindrome
  // Additionally, if there are any spaces, we should ignore it.

  // What are the properties of a palindrome? Well:
    // If the string is even, each letter should appear an even amount of times
    // If the string is odd, only one letter should appear an odd amount of times.
      // Check this theory. Take for example:
        // 'basssab' -> Seven letters
        // 'asdffffasd' -> Ten letters
    // This palindrome is not limited to words that only exist in a dictionary

// Naive solution:
  // Create an object to store the number of times each character appears
    // Each key is a unique character, each value is the number of occurrences
  // Iterate over our string
    // If the character is a blank space, ignore it
    // If the character exists as a key in our object, increment it by one
    // Otherwise, reduce it by one.
  // Now, find out if the string is even or odd
  // Iterate over the object.
    // If our string is EVEN, for every iteration if we find a single character
    // that appears an odd number of times, return false
    // If our string is ODD, for every iteration if we find more than one single character
    // that appears an odd number of times, return false
      // Additionally, exactly one character HAS to exist an odd number of times here.

  // We can split this into multiple functions

var palindromePermutation = function(string) {
  var storageObject = {};
  var isEven = string.split(' ').join('').length % 2 === 0
  var oddFound = false;

  // This loop can be split into a function of its own
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      i++;
    }
    if (storageObject.hasOwnProperty(string[i])) {
      storageObject[string[i]]++;
    } else {
      storageObject[string[i]] = 1;
    }
  }

  for (var key in storageObject) {
    if (isEven && storageObject[key] % 2 !== 0) {
      return false;
    }

    if (!isEven && storageObject[key] % 2 !== 0) {
      if (!oddFound) {
        oddFound = true;
      } else {
        return false;
      }
    }
  }

  if (isEven || (!isEven && oddFound)) {
    return true;
  } else {
    return false;
  }
}