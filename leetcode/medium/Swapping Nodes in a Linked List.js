// You are given the head of a linked list, and an integer k.
// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end(the list is 1 - indexed).

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let vals = [];
    let tmp = head;
    while (tmp) {
        vals.push(tmp.val);
        tmp = tmp.next;
    }
    let a = vals[k - 1];
    let b = vals[vals.length - k];
    if (a != b) {
        vals[k - 1] = b;
        vals[vals.length - k] = a;
        tmp = head;
        while (tmp) {
            tmp.val = vals.shift();
            tmp = tmp.next;
        }
    }
    return head;
};