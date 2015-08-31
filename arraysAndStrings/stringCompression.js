// Given a string, write an algorithm that compresses the string into the number of occurrences
// For example, 'aaabbccaa' -> 'a3b2c2a2'
// If a compressed string is not smaller than the original string, return the original string instead.


// Two things we want to do
  // We want to build a string that concatenates the letter + counter
  // We also want to constantly check for length of that string compared
  // to the length of the original string

var stringCompression = function(string) {
  var results = '';
  var currentLetter = string[0];
  var counter = 0;

  // Iterating to string.length++ means we catch that last letter
  for (var i = 0; i <= string.length; i++) {
    if (currentLetter === string[i]) {
      counter++;
    } else {
      results += currentLetter + counter;
      currentLetter = string[i];
      counter = 1;
    }
  }

  return results.length >= string.length ? string : results;
}