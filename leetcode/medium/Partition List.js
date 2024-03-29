// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
// You should preserve the original relative order of the nodes in each of the two partitions.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let seen = [[], []];
    while (head) {
        seen[+!(head.val < x)].push(new ListNode(head.val));
        head = head.next;
    }
    let ret = seen.flat();
    for (let i = 0; i < ret.length - 1; i++) {
        ret[i].next = ret[i + 1];
    }
    return ret[0] || head;
};