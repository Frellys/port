// Remove all elements from a linked list of integers that have value val.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    function traverse(node) {
        if (node) {
            while (node.next && node.next.val == val) {
                node.next = (node.next).next;
            }
            if (node) traverse(node.next);
        }
    }
    traverse(head);
    if (head && head.val == val) {
        head = head.next;
    }
    return head;
};