// Implement a function, isUnique, which takes in a string and determines whether or not it contains all unique characters.

// Hard mode: Do not use any additional data structures

// Edge cases: Valid strings only? Do they have spaces? Do spaces count as a character?

function isUnique(str) {
  // Normally, I would iterate over the string and store each character into an object, setting its value as true. Then if at any point that key is true, I'd return false.
  // Without the ability to use any data structures, I can see this turning into a terrible exponential time operation, but let's think about it.
    // I can have nested for-loops, but I can have the inner for-loop start at one more letter forward?

  var found = false;
  for (var i = 0; i < str.length; i++) {
    var letter = str.charAt(i);
    for (var k = ++i; k < str.length; k++) {
      if (letter === str.charAt(k)) {
        found = true;
      }
    }
  }
  return !found;
}