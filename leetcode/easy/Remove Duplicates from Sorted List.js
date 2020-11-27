// Given a sorted linked list, delete all duplicates such that each element appear only once.

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
var deleteDuplicates = function (head) {
    function traverse(node) {
        while (node.next && node.val == node.next.val) {
            node.next = (node.next).next;
        }
        if (node.next) traverse(node.next);
    }
    if (head) traverse(head);
    return head;
};