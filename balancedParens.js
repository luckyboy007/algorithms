// Given a string, write an algorithm that returns a boolean
// depending on whether or not the parentheses within it are balanced or not.

// Extra credit: Make this solution work for all types of brackets: '( )', '[ ]', and '{ }'

// Approach:
  // Parentheses begin with '(', so we need to note whenever we find
  // one and whether or not we find a closing ')' that comes after it.
  // We can't just count the number of starting and closing brackets,
  // because we can't count any closing ones that come before it.
    // Instead, we should also store a 'foundBeginningFirst' boolean of sorts.
      // Edge case: '(()' which parens does the closing one really close?
      // Does it matter which one it closes?

  // Store three variables:
    // openingParensCount integer
    // closingParensCount integer
    // openingParensExistsFirst boolean
      // reset this one to close whenever we close the parentheses,
      // but set it back to true if our openingParensCount > closingParensCount.
    // If we ever find a closingParens BEFORE an openingParens, we return false
    // If openingParensCount is ever greater than closingParensCount, we return false.

var balancedParens = function(string) {
  var openingParensCount = 0;
  var closingParensCount = 0;
  var openingParensExistsFirst = false;

  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      openingParensCount++;
      openingParensExistsFirst = true;
    }

    if (string[i] === ')') {
      if (!openingParensExistsFirst) {
        return false;
      } else if (openingParensExistsFirst) {
        closingParensCount++;
        if (openingParensCount === closingParensCount) {
          openingParensExistsFirst = false;
        }
      }
    }
  }

  return openingParensCount === closingParensCount;
}

// Refactor, optimize this code:

var balancedParens = function(string) {
  var openingParensCount = 0;
  var closingParensCount = 0;
  // Let's get rid of this boolean, it's probably not necessary

  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      openingParensCount++;
    } else if (string[i] === ')' && openingParensCount <= closingParensCount) {
      return false;
    } else if (string[i] === ')') {
      closingParensCount++;
    }
  }

  return openingParensCount === closingParensCount;
}

//  Optimize this again:

var balancedParens = function(string) {
  var openingCount = 0;
  var closingCount = 0;

  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (letter === '(') {
      openingCount++;
    }

    if (letter === ')') {
      if (openingCount <= closingCount) {
        return false;
      }
      closingCount++;
    }
  }
  return openingCount === closingCount;
}