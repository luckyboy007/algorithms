// Given a string, write an algorithm that replaces all whitespaces with '%20'

// Questions to ask:
  // Will a string always contain spaces?
  // Will there be strings that consist of nothing but whitespaces?
  // Any time/space constraints?

// Things of note:
  // Since strings are immutable (we cannot change elements in the string, we can only add to it),
  // we should transform this string into a different data type first.

// First solution:
  // Split the string into an array of characters
  // Iterate over this array.
    // If the element is a whitespace,
    // we're going to change that element to the string of '%20'
  // Join the array back together at the end and return it

var urlify = function(string) {
  var arr = string.split('');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr[i] = '%20';
    }
  }

  return arr.join('');
}