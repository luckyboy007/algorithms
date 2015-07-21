/*
The Head Librarian at a library wants you to make a program that calculates the fine for returning the book after the return date. You are given the actual and the expected return dates. Calculate the fine as follows:

If the book is returned on or before the expected return date, no fine will be charged, in other words fine is 0.
If the book is returned in the same month as the expected return date, Fine = 15 Hackos × Number of late days
If the book is not returned in the same month but in the same year as the expected return date, Fine = 500 Hackos × Number of late months
If the book is not returned in the same year, the fine is fixed at 10000 Hackos.
*/

// Input: A string with two lines. The first line is the actual return date, the second is the original due date.

// Sample input:
// 9 6 2015
// 6 6 2015

// Output: The fine

// Sample output:
// 45

function libraryFine(input) {
  // Let's first grab the two lines and store them into an array. We'll split by the line break.
  var datesArray = input.split('\n');

  // Now, let's split each of these strings by their spaces.
  var returnDate = datesArray[0].split(' ');
  var dueDate = datesArray[1].split(' ');

  // Great, now we'll keep track of the fine
  var difference = 0;

  // First, we'll check to see if the item was returned during the same year. If it isn't we're going to return a flat 1000.
  if (returnDate[2] > dueDate[2] && !difference) {
    difference = 10000;
  }

  // Let's now check to see if we returned it at a later month
  if (returnDate[1] > dueDate[1] && returnDate[2] >= dueDate[2] && !difference) {
    difference = 500 * (parseInt(returnDate[1]) - parseInt(dueDate[1]));
  }

  // Otherwise, we'll calculate by days if we need to
  if (returnDate[0] > dueDate[0] && returnDate[1] >= dueDate[1] && returnDate[2] >= dueDate[2] && !difference) {
    difference = 15 * (parseInt(returnDate[0]) - parseInt(dueDate[0]));
  }

  console.log(difference);
}