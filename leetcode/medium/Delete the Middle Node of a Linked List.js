// You are given the head of a linked list.Delete the middle node, and return the head of the modified linked list.
// The middle node of a linked list of size n is the n / 2th node from the start using 0 - based indexing, where x denotes the largest integer less than or equal to x.
// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

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
var deleteMiddle = function (head) {
    if (!head.next) {
        return head.next;
    }
    let cur = head;
    let cnt = 0;
    while (cur = cur.next) {
        cnt++;
    }
    let mid = Math.ceil(cnt / 2) - 1;
    cur = head;
    let idx = 0;
    while (idx < mid) {
        cur = cur.next;
        idx++;
    }
    cur.next = cur.next.next;
    return head;
};