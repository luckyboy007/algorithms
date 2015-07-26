// Given a string, a K cipher value, and N length, output a string whose letters are rotated K letters forward.
// Only alphabetical characters should be rotated, nothing else.

// Example input: `middle-Outz` with K = 2 is output as `okffng-Qwvb`

/*
  Edge cases to consider:
    + Rotating past Z, we have to go back to A
    + K can be up to 100!
    + Valid string, no spaces
    + Return the same string, or a new one?
*/

function caesarCipher(string) {
  var inputArr = string.split('\n');

  var n = inputArr[0];
  var stringToCipher = inputArr[1].split('');
  var rotationAmount = inputArr[2] >= 26 ? parseInt(inputArr[2]) % 26 : parseInt(inputArr[2]);

  function rotateLetter(charCode, baseNum, maxNum) {
    totalNum = charCode + rotationAmount;
    totalDiff = totalNum - maxNum;

    if (totalDiff > 0) {
      totalNum = baseNum + (totalDiff - 1);
    }

    return totalNum;
  }

  // Iterate over the string
  for (var i = 0; i < n; i++) {
    // Capital 'A' starts at charCode 65 and ends at 90
    // 'a' starts at charCode 97, ends at 122
    var char = stringToCipher[i].charCodeAt(0);

    if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
      if (char >= 65 && char <= 90) {
        stringToCipher[i] = String.fromCharCode(rotateLetter(char, 65, 90));
      } else if (char >= 97 && char <= 122) {
        stringToCipher[i] = String.fromCharCode(rotateLetter(char, 97, 122));
      }
    }
  }
  console.log(stringToCipher.join(''));
}