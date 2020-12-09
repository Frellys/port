// Reverse a singly linked list.

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
var reverseList = function (head) {
    if (!head) return head;
    let arr = [];
    function traverse(node) {
        if (node) {
            arr.push(node.val);
            traverse(node.next);
        }
    }
    traverse(head);
    arr.reverse();
    let ret = new ListNode();
    ret.val = arr.pop();
    while (arr.length) {
        let cur = ret;
        ret = new ListNode();
        ret.val = arr.pop();
        ret.next = cur;
    }
    traverse(head);
    return ret;
};