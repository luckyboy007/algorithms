// Given just the middle node of a singly linked list, delete it.
// Nothing is returned, but the linked list is modified without that node.


// Approach:
  // Since it's only a singly linked list, I can't grab the previous node
  // and just have it reference the node that comes next from our given one
  // HOWEVER, I can just replace the information of the current node with
  // all of the information of its NEXT node, which would cause the next node
  // to be garbage collected eventually.

var deleteMiddleNode = function(node) {
  node.value = node.next.value;
  node.next = node.next.next;
  return 'Success!';
}
