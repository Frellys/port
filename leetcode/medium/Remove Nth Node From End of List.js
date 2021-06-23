// Given the head of a linked list, remove the nth node from the end of the list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let arr = [];
    let tmp = head;
    while (tmp) {
        arr.push(tmp);
        tmp = tmp.next;
    }
    arr.splice(arr.length - n, 1);
    for (let i = 0; i < arr.length; i++) {
        arr[i].next = (arr[i + 1]) ? arr[i + 1] : null;
    }
    return (arr.length) ? arr[0] : head.next;
};