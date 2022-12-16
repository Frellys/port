// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
// Return the linked list sorted as well.

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
    let seen = [];
    while (head) {
        seen.push(head.val);
        head = head.next;
    }
    let ret = [];
    Array.from(new Set(seen)).forEach(function (el) {
        if (seen.indexOf(el) == seen.lastIndexOf(el)) {
            ret.push(new ListNode(+el));
        }
    });
    for (let i = 0; i < ret.length - 1; i++) {
        ret[i].next = ret[i + 1];
    }
    return ret[0] || head;
};