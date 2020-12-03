// Given a linked list, return the node where the cycle begins.If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Notice that you should not modify the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let ret = null;
    let pos = 0;
    let node = head;
    while (node) {
        if (typeof node['pos'] == 'number') {
            ret = node;
            break;
        }
        node['pos'] = pos;
        node = node.next;
        pos++;
    }
    return ret;
};