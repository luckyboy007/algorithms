// There are three types of edits you can perform on strings:
  // Insert a character
  // Remove a character
  // Replace a character

// Given two strings, write an algorithm to check if they are one or zero edits apart.
// Example: 'pale', 'ple' -> true (one removal away)
// Example: 'pales', 'pale' -> true (one insert away)
// Example: 'pale', 'bale' -> true (one replacement away)
// Example: 'pale', 'bake' -> false (two replacements away);

// The approach:
// First, let's figure out which case we're dealing with.
  // If the first string's length is 1 greater than the second, removal
  // If the first string's length is 1 less than the second, insertion
  // If they're both the same, it's either a replacement or no change
// Optimization: If the lengths of both strings are more than one apart, we return false.
// Like a problem we solved earlier, we can store the values of both strings into an object
// and then compare the two objects
// Alternately, we can sort the strings and point out the differences.

var storeContentsInObject = function(string) {
  var storage = {};

  for (var i = 0; i < string.length; i++) {
    if (!storage[string[i]]) {
      storage[string[i]] = 1;
    } else {
      storage[string[i]]++;
    }
  }

  return storage;
}

var findDifferences = function(object1, object2) {
  var storage = [];
  for (var key in object1) {
    if (!object2[key]) {
      storage.push(object1[key]);
    }

    if (object1[key] !== object2[key]) {
      var difference = Math.abs(object1[key] - object2[key]);
      while (difference--) {
        storage.push('placeholder');
      }
    }
  }

  for (key in object2) {
    if (!object1[key]) {
      storage.push(object2[key]);
    }
  }

  return storage;
}

var oneAway = function(string1, string2) {
  // Store the contents of both strings into an object
  var objectFromString1 = storeContentsInObject(string1);
  var objectFromString2 = storeContentsInObject(string2);

  var differencesBetweenObjects = findDifferences(objectFromString1, objectFromString2);

  if (Math.abs(string1.length - string2.length) === 1) {
    return differencesBetweenObjects.length === 1
  } else if (string1.length === string2.length) {
    // We're dealing with changes/no changes
    return differencesBetweenObjects.length === 2
  } else {
    // It's greater, so we return false
    return false;
  }
}