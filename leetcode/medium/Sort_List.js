// Given the head of a linked list, return the list after sorting it in ascending order.

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
var sortList = function (head) {
    let values = [];
    let cnt = 0;
    function get_values(node) {
        if (node) {
            values.push(node.val);
            get_values(node.next);
        }
    }
    function set_values(node) {
        if (node) {
            node.val = values[cnt];
            cnt++;
            set_values(node.next);
        }
    }
    get_values(head);
    values.sort(function (a, b) { return a - b; });
    set_values(head);
    return head;
};