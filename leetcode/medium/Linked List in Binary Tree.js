// Given a binary tree root and a linked list with head as the first node.
// Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.
// In this context downward path means a path that starts at some node and goes downwards.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
    let list = [head.val];
    while (head.next) {
        head = head.next;
        list.push(head.val);
    }
    list = list.join(',');
    let paths = [];
    let cur = [];
    function traverse(node) {
        if (node) {
            cur.push(node.val);
            if (!node.left && !node.right) paths.push(cur.join(','));
            traverse(node.left);
            traverse(node.right);
            cur.pop();
        }
    };
    traverse(root);
    let ret = false;
    paths.forEach(function (p) {
        if (p.includes(list)) ret = true;
    });
    return ret;
};