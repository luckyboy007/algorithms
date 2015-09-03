// Given a single input string, write a function that produces all possible anagrams
// and outputs them in an array.

// Approach
// This seems a lot like the 'rock paper scissors' problem.
// We're going to return all possible permutations of a string,
// but only unique ones (we don't want to return duplicates)
  // Dealing with duplicates: We can use an object to store them
  // and return Object.keys() at the end

var allAnagrams = function(string) {
  // Use an object to store the output
  var results = {};

  // Create a subroutine that will capture all possible
  // permutations of the string
  var subroutine = function(currentString, remainingInput) {
    // Base case: If our current string's length is equal to the input string's length,
    // we'll add it to our object
    if (currentString.length === string.length) {
      results[currentString] = true;
    }

    // Otherwise, we're going to iterate through the remaining input
    // and add the current letter to the currentString in our subrouting
    subroutine(currentString + remainingInput[i], remainingInput.slice(0, i) + remainingInput.slice(i + 1));
  }

  subroutine('', string);

  return Object.keys(results);

}