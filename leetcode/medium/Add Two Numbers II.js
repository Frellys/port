// You are given two non - empty linked lists representing two non - negative integers.
// The most significant digit comes first and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
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
var addTwoNumbers = function (l1, l2) {
    let n1 = [];
    let n2 = [];
    function traverse(node, arr) {
        if (node) {
            arr.push(node.val);
            traverse(node.next, arr);
        }
    };
    traverse(l1, n1);
    traverse(l2, n2);
    let sum = [];
    let sup = 0;
    while (n1.length || n2.length) {
        let tmp = ((n1.length) ? n1.pop() : 0) + ((n2.length) ? n2.pop() : 0) + sup;
        sup = (tmp >= 10) ? 1 : 0;
        tmp = tmp % 10;
        sum.push(tmp);
    }
    if (sup) sum.push(sup);
    sum = sum.reverse().map(function (num) { return new ListNode(num); });
    sum.forEach(function (ln, ldx) { ln.next = (ldx + 1 == sum.length) ? null : sum[ldx + 1]; });
    return sum[0];
};