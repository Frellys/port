// Given a non - empty, singly linked list with head node head, return a middle node of linked list.
// If there are two middle nodes, return the second middle node.

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
var middleNode = function (head) {
    let ret = head;
    if (!ret.next) return ret;
    let cur = head;
    let cnt = 0;
    while (cur.next) {
        cur = cur.next;
        cnt++;
    }
    cnt = (cnt + (cnt % 2)) / 2;
    while (cnt > 0) {
        ret = ret.next;
        cnt--;
    }
    return ret;
};