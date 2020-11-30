// Given a singly linked list, determine if it is a palindrome.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let arr = [];
    function traverse(node) {
        if (node) {
            arr.push(node.val);
            traverse(node.next);
        }
    }
    traverse(head);
    let flag = true;
    let half = Math.floor(arr.length / 2);
    for (let i = 0; i < half; i++) {
        if (arr[i] != arr[arr.length - (i + 1)]) {
            flag = false;
            break;
        }
    }
    return flag;
};