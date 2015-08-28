/*
Given a string with multiple sentences, number of words within the longest sentence.

Example input:
'hello world. how are you today? I'm ok and you too?'

Example output:
5 // I'm ok and you too? = 19 characters, 5 words

*/

function longestSentence(string) {
  // I need to be able to identify when a sentence begins and ends.
  // If sentences end with only a period, then that's fairly simple -- split the string by its periods.
  // However, question marks may also be involved. Same for exclamation point.
  // Let's assume that sentences will end with either a period '.', question mark '?', or exclamation point '!'

  // The end solution would be to iterate across all broken up sentences and find the length, then return the number of words in that specific sentence.
  // To do this, I need to store the sentences in an array
  var sentences = [];

  // Now, let's iterate over the string. We're going to keep track of an insertion point.
  var insertionPoint = 0;

  for (var i = 0; i < string.length; i++) {
    // If the character is either a period, question mark, or exclamation point
    if (string[i] === '.' || string[i] === '?' || string[i] === '!' || string.slice(i, i+3) === '...' || ) {
      // Slice the string from insertionPoint to i + 1
      sentences.push(string.slice(insertionPoint, ++i));
      insertionPoint = ++i;
    }
  }

  // Now, theoretically, our string should be split into sentences. Now I'm going to find the index of the longest string. Let's store it in a variable.
  var longestIndex = 0;

  for (i = 1; i < sentences.length; i++) {
    // If the length of this sentence is greater than the length of the previous greatest index,
    if (sentences[i].length > sentences[longestIndex].length) {
      // Change the index
      longestIndex = i;
    }
  }

  // Now, we're going to return the number of words in that sentence.
  // To do this, I'm going to split the sentence into an array by its spaces
  // and return the length
  return sentences[longestIndex].split(' ').length;
}

// Edge cases to consider:
  // The space after each sentence
    // Currently addressed by increasing the insertion point by one
  // The use of triple periods to note an ellipsis
  // Quotes, if they're intended to be new sentences
  // Colons, if they're intended to provide new sentences