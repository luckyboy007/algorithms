// Given a string in hh:mm:ssAM or hh:mm:ssPM format, convert it to 24hour time.

// Sample input: 07:05:45PM
// Sample output: 19:05:45

function timeConversion(input) {
  // We need to determine whether or not the time is AM or PM.
  // Let's separate the input from AM/PM, splitting the time into an array:
  var format = input.slice(-2);
  var timeOnly = input.slice(0, -2).split(':');
    // Find out if the hour is "12"
    if (timeOnly[0] === '12') {
      // If it is, find out if it's AM or PM. If it's AM, set it to '00'. Otherwise keep it as-is.
      if (format === 'AM') {
        timeOnly[0] = '00';
      }
    }

    if (timeOnly[0] !== '00' && timeOnly[0] !== '12') {
      // If it isn't midnight/noon, we're going to check the format. If it's AM, keep it as is. Otherwise, increase by twelve.
      if (format === 'PM') {
        timeOnly[0] = (parseInt(timeOnly[0]) + 12)
      }
    }
    console.log(timeOnly.join(':'));
}