// You are given two non - empty linked lists representing two non - negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

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
var addTwoNumbers = function (l1, l2, sup = 0) {
    if (l1 || l2) {
        let sum = (l1?.val || 0) + (l2?.val || 0) + sup;
        return new ListNode((sum % 10), addTwoNumbers(l1?.next, l2?.next, +(sum > 9)));
    }
    else {
        if (sup) {
            return new ListNode(sup);
        }
    }
};