// Given two strings, write an algorithm to decide if one string is the permutation of the other.

// A permutation is made up of all of the available elements of a given string.
// For example, 'dog' is a permutation of 'god'.
// The string does not have to be a valid 'word' in any sort of dictionary.

// Possible questions to ask:
  // Are there any guaranteed minimum/maximum input lengths?
    // Quick optimization: Return false if both strings do not share the exact same length
  // Do whitespaces count?
  // Is this case sensitive?
  // Time/space complexity?

// Naive solution:
  // Iterate over the first string.
    // Within this iteration, iterate over the seoncd string
    // Check for a matching letter.
    // If it exists, we should remove it from the second string

// Better idea:
  // Sort one or both strings alphabetically
  // Afterwards, iterate from one sorted string
    // Check to see if the character we're iterating across is exactly the same
    // as the other sorted string
      // If they are, continue
      // If at any point they aren't, return false
  // Now, return true if our iteration has ended ahd has not returned false


var checkPermutation = function(string1, string2) {
  string1 = string1.split('').sort().join('');
  string2 = string2.split('').sort().join('');

  if (string1.length !== string2.length) {
    return false;
  }

  for (var i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      return false;
    }
  }

  return true;
}