// In a class of N students, a professor will cancel the class if there are fewer than K students present after the class starts.

/*
  Input: A mult-line string. The first line contains T, the number of individual test cases.
  After that, every two lines represents a class. The first includes N, the number of students in the class, and K, the threshold for the class to NOT be cancelled
  The line after that includes N space-separated integers representing the arrival time of each student.

  If the arrival time is negative, they arrived before class starts. IF the arrival time is greater than 0, they arrived late.

  Output: 'YES' if the class gets cancelled, 'NO' if it does not.
*/


function angryProfessor(string) {
  // Split the string into an array by its line break
  var infoArr = string.split('\n');

  // Grab the number of test cases
  var testCases = infoArr[0];

  // Object to hold each individual class:
  var classObj = {};

  // Place class info into class object
  for (var i = 1; var j = 0; i < infoArr.length; i++) {
    classObj[j] = classObj[j] || [];
    classObj[j].push(infoArr[i]);
    if (i % 2 === 0) {
      j++;
    }
  }

  // Create a placeholder string for results
  var result = '';

  // Subroutine to check each test case
  function subroutine(startValue) {
    if (startValue === testCases) {
      console.log(result);
      return;
    }
    var threshold = classObj[startValue][0].split(' ')[1];
    var attendanceArr = classObj[startValue][1].split(' ');

    attendanceArr.forEach(function(elem) {

    })
  }

  subroutine(testCases);
}