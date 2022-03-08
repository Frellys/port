// Merge two sorted linked lists and return it as a new sorted list.
// The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let ret = null;
    if (l1 || l2) {
        let arr = [];
        Array.from(arguments).forEach(l => {
            while (l) {
                arr.push(l.val);
                l = l.next;
            }
        });
        arr.sort((a, b) => a - b);
        ret = new ListNode(arr.pop());
        while (arr.length) {
            ret = new ListNode(arr.pop(), ret);
        }
    }
    return ret;
};