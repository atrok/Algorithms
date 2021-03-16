/*

Description #
Given the head pointer of a linked list, sort the linked list in ascending order using insertion sort. Return the new head pointer of the sorted linked list.

For example #
If the given linked list is 29 -> 23 -> 82 -> 11, then the sorted list should be 11 -> 23 -> 29 -> 82

*/

const linkedList = require("./linkedlist_beginend");
const { LinkedList } = require("./linkedlist_beginend");

let insertionSort = function (head) {
  let current = head.next;
  let sorted = new LinkedList(head.val);
  //sorted.next = null;

  while (current) {
    console.log(current);

    let inserted = true;

    let currSorted = sorted;
    let prevSorted = null;

    while (inserted) {
      if (current.val > currSorted.val) {
        // move to the next  node in sorted list
        console.log("move to the next  node in sorted list");
        prevSorted = currSorted;
        currSorted = prevSorted.next;

        if (currSorted === null) {
          // reached end of sorted list, need to add to the end
          console.log("reached end of sorted list, need to add to the end");
          prevSorted.next = new LinkedList(current.val);
          inserted = false;
        }
      } else {
        // insert node
        console.log("insert node");
        if (prevSorted === null) {
          // our node is smaller than head of sorted list
          console.log("our node is smaller than head of sorted list");
          sorted = new LinkedList(current.val);
          sorted.next = currSorted;
          inserted = false;
        } else {
          // need to insert in between
          console.log("need to insert in between");
          prevSorted.next = current;
          prevSorted.next.next = currSorted;

          inserted = false;
        }
      }
    }
    current = current.next;
  }
  return sorted;
};

var head = linkedList.populateLinkedList([29, 23, 82, 11]);

let sorted = insertionSort(head);
console.log(sorted);
