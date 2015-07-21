// Given an integer, N, construct a staircase made of hashes.
// Sample input: 6

/* Sample Output:
      #
     ##
    ###
   ####
  #####
 ######
 */

// 1. Each line consists of n - i spaces. i starts at 1 (one step) and increments.

function processData(input) {
  var n = input;

  var stairString = '';

  function makeStairs(spaces, steps) {
    // If the number of steps is greater than n, break
    if (steps > n) {
      return;
    }
    var tempStr = '';
    // Iterate ONCE.
    for (var i = 0; i < n; i++) {
      // If the iterator is less than or equal to the number of spaces, add a space
      if (i < spaces) {
        tempStr += ' ';
      } else {
        tempStr += '#';
      }
    }
    stairString += (tempStr + '\n');
    makeStairs(--spaces, ++steps);
  }

  makeStairs((n - 1), 1);
  console.log(stairString);
}