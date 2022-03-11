// Given the head of a linked list, rotate the list to the right by k places.

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
var rotateRight = function (head, k) {
    let ret;
    if (head) {
        let arr = [head.val];
        while (head = head.next) {
            arr.push(head.val);
        }
        k %= arr.length;
        arr.splice(-k, k).concat(arr).reverse().forEach(v => ret = new ListNode(v, ret));
    }
    return ret || head;
};