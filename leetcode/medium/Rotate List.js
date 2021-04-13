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
    if (ret = head) {
        let vals = [head.val];
        while (head = head.next) {
            vals.push(head.val);
        }
        k = k % vals.length;
        while (k--) {
            vals.unshift(vals.pop());
        }
        ret = new ListNode(vals.pop(), undefined);
        while (vals.length) {
            ret = new ListNode(vals.pop(), ret);
        }
    }
    return ret;
};