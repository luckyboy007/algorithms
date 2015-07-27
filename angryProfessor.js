// In a class of N students, a professor will cancel the class if there are fewer than K students present after the class starts.

/*
  Input: A mult-line string. The first line contains T, the number of individual test cases.
  After that, every two lines represents a class. The first includes N, the number of students in the class, and K, the threshold for the class to NOT be cancelled
  The line after that includes N space-separated integers representing the arrival time of each student.

  If the arrival time is negative, they arrived before class starts. IF the arrival time is greater than 0, they arrived late.

  Output: 'YES' if the class gets cancelled, 'NO' if it does not.
*/

function angryProfessor(string) {
  // First, split my string into an array by its line breaks
  var infoArr = string.split('\n');
  // Grab T, the number of test cases
  var testCases = parseInt(infoArr[0]);
  // Store the results in a string
  var results = '';

  // Iterate from 0 to testCases
  for (var i = 1, startValue = 1; i <= testCases; i++) {
    // Turn the info line into an array, split by the space, and grab the numbers
    var classInfo = infoArr[startValue].split(' ');
    console.log('classInfo ' + classInfo);
    var enrolledStudents = parseInt(classInfo[0]);
    console.log('enrolledStudents ' + enrolledStudents);
    var minThreshold = parseInt(classInfo[1]);
    console.log('minThreshold ' + minThreshold);

    // Grab the attendance
    var classAttendance = infoArr[(startValue + 1)].split(' ');
    console.log('classAttendance ' + classAttendance);

    // Count the number of late students
    var lateStudents = 0;

    // Iterate over class attendance
    classAttendance.forEach(function (elem) {
      console.log('parseInt ' + parseInt(elem));
      if (parseInt(elem) > 0) {
        lateStudents++;
        console.log('lateStudents ' + lateStudents)
      }
    })

    // If we subtract the number of lateStudents from enrolledStudents and it is greater than the threshold, append 'NO' to results.

    if ((enrolledStudents - lateStudents) >= minThreshold) {
      results += 'NO\n';
    } else {
      results += 'YES\n';
    }
    console.log('results ' + results;)
    startValue += 2;
  }

  console.log(results);
}