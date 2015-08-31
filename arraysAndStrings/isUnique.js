// Implement an algorithm to determine if a string contains all unique characters.
  // Extra credit: What if you can't use additional data structures?


// Questions to ask:
  // Maximum length of the string?
  // Restricted to only unicode characters? ASCII?
  // Any numbers and/or symbols? Or are they all letters?
  // Any target time/space complexity?
  // What about whitespaces?

// The naive solution:
// Create an object within this function
  // This object will contain key/value pairs with
  // the key pertaining to each individual character and
  // the value set to a boolean
// Iterate over the string
  // If our object has a key of the current character, we're going to return false
  // Otherwise, we're going to set object[character] = true
// At the end of this iteration, if our function hasn't returned false, return true

var isUnique = function(string) {
  var charactersObj = {};

  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      continue;
    }

    if (charactersObj[string[i]]) {
      return false;
    }

    charactersObj[string[i]] = true;
  }

  return true;
}


// Edge case: What if we can't use any additional data structures?
// How would we solve this if we cannot use any extra data?

// Greedy approach:
// Still iterate through the string.
  // At each iteration, we're going to then iterate inside the remaining
  // portion of the string to check for duplicates.
  // With each additional iteration, the amount of letters we'd have to
  // go through is reduced by one.

// Possible optimizations:
  // Knowing the amount of total unique characters,
  // return false if our input string's length is greater than that number