// You are given an array of k linked - lists lists, each linked - list is sorted in ascending order.
// Merge all the linked - lists into one sorted linked - list and return it.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let head = new ListNode();
    let temp = head;
    lists = lists.filter(Boolean);
    while (lists.length) {
        let cur = {
            val: Number.MAX_SAFE_INTEGER,
            idx: -1
        };
        lists.forEach(function (node, ndx) {
            if (cur.val > node.val) {
                cur.val = node.val;
                cur.idx = ndx;
            }
        });
        if (cur.idx > -1) {
            temp.next = new ListNode(lists[cur.idx].val);
            temp = temp.next;
            lists[cur.idx] = lists[cur.idx].next;
            if (!lists[cur.idx]) {
                lists.splice(cur.idx, 1);
            }
        }
    }
    return head.next;
};