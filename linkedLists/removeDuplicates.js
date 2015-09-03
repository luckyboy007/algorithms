// Given an unsorted linked list, write an algorithm to remove any duplicates within it.

// Extra credit: What if a temporary buffer were not allowed

// Questions worth asking:
  // Is this a singly or doubly linked list? Does it matter?
  // Am I returning anything? A pointer to the first node again? The nodes that were removed?

// Approach
  // With a buffer to store information, we could use
  // an object to keep track of the values of each node
  // in our linked list. If a node were to have a value
  // that already existed in this object, we would just
  // delete that node by pointing the previous node over
  // to this current node's next value, which would
  // then cause the JS interpreter to garbage collect
  // since the node would no longer be used.
    // I'm going to work off the assumption that our Linked List class has already
    // been created and that it has a method to delete nodes within it

var removeDuplicates = function(node) {
  var storage = {};

  while (node.next !== null) {
    if (!storage[node.value]) {
      storage[node.value] = true;
      node = node.next;
    } else {
      node.delete()
    }
  }
}

// Without a buffer, we'd have to have two pointers and run a second iteration.

var removeDuplicatesWithoutBuffer = function(node) {
  while (node.next !== null) {
    var nextNode = node.next;
    while (nextNode.next !== null) {
      if (node.value === nextNode.value) {
        nextNode.delete();
      } else {
        nextNode = nextNode.next;
      }
    }
    node = node.next;
  }
}