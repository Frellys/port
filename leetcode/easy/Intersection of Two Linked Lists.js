// Write a program to find the node at which the intersection of two singly linked lists begins.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let ret = null
    while (headA) {
        headA['seen'] = true;
        headA = headA.next;
    }
    while (headB) {
        if (headB['seen']) {
            ret = headB;
            break;
        }
        headB = headB.next;
    }
    return ret;
};