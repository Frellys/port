// Given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let arr = [head];
    while (head) {
        arr.push(head = head.next);
    }
    let cnt = arr.splice(--left, right - left).reverse();
    Array.prototype.splice.apply(arr, [left, 0].concat(cnt));
    for (let i = Math.max(0, --left); i < right; i++) {
        arr[i].next = arr[i + 1];
    }
    return arr[0];
};