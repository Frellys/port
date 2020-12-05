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
    if (!l1 && !l2) return null;
    let arr = [];
    while (l1) {
        arr.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        arr.push(l2.val);
        l2 = l2.next;
    }
    arr.sort(function (a, b) { return a - b; });
    let ret = new ListNode();
    ret.val = arr.pop();
    while (arr.length != 0) {
        let cur = new ListNode();
        cur.val = arr.pop();
        cur.next = ret;
        ret = cur;
    }
    return ret;
};