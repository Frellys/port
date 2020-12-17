// Given a linked list, swap every two adjacent nodes and return its head.
// You may not modify the values in the list's nodes.
// Only nodes itself may be changed.

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
var swapPairs = function (head) {
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    for (let i = 0; i < nodes.length; i += 2) {
        if (nodes[i + 1]) {
            let tmp = nodes[i];
            nodes[i] = nodes[i + 1];
            nodes[i + 1] = tmp;
        }
    }
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].next = (nodes[i + 1]) ? nodes[i + 1] : null;
    }
    return (nodes[0] || null);
};