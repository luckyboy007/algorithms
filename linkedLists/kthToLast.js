// Given the first node of a singly-linked list and a number K,
// Return the value of the node Kth from the last one in the linked list.

// Approach:
// Let's look at some examples of what the Kth value would be
  // In a Linked List with 10 items in it and K = 7
    // The 7th value from the end would be the 3rd item in our Linked List
  // With 5 items and K = 2
    // The 2nd value from the end would be the 3rd item
  // In other words, the item we're looking for is Length - K.
    // However, we only know K and not the length.
    // What if we looked at it a different way? Once we reach the Kth node (7th and 2nd),
    // the node we're looking for is just Length - X away (X is the node we're looking for).


// We can traverse the entire linked list, using two variables to count.
// The first counter will counter how many nodes we've visited.
// The moment we've visited exactly K nodes, our second
// counter will start moving upwards with our first until we reach
// the end. Then, we'll just return the second counter.


var kthToLast = function(node, k) {
  var firstCounter = 0;
  var nodeToReturn = node;

  while (node.next !== null) {
    if (firstCounter >= k) {
      nodeToReturn = nodeToReturn.next;
    }
    firstCounter++;
    node = node.next;
  }

  return nodeToReturn.value;
}

// LL length = 5
// K = 2
// Target node = 3

// First pass: firstCounter = 1, nodeToReturn = 1, node = 2
// Second pass: firstCounter = 2, nodeToReturn = 1, node = 3
// Third pass: firstCounter = 3, nodeToReturn = 2, node = 4
// Fourth pass: firstCounter = 4, nodeToReturn = 3, node = 5
// Fifth pass: does not happen because node.next === null