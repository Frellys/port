// Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.
// The steps of the insertion sort algorithm:
// - Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
// - At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
// - It repeats until no input elements remain.
// The following is a graphical example of the insertion sort algorithm.The partially sorted list(black) initially contains only the first element in the list.
// One element(red) is removed from the input data and inserted in -place into the sorted list with each iteration.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    let vals = [];
    while (head) {
        vals.push(head.val);
        head = head.next;
    }
    vals = vals.sort((a, b) => a - b).map(v => new ListNode(v));
    vals.forEach(function (el, edx) {
        el.next = vals[edx + 1] || null;
    });
    return vals[0];
};