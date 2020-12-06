// Given a binary tree
// Populate each next pointer to point to its next right node.
// If there is no next right node, the next pointer should be set to NULL.
// Initially, all next pointers are set to NULL.

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    let levels = [];
    let cur = -1;
    function traverse(node) {
        if (node) {
            cur++;
            if (typeof levels[cur] == 'undefined') {
                levels.push([node]);
            }
            else {
                levels[cur].push(node);
            }
            traverse(node.left);
            traverse(node.right);
            cur--;
        }
    }
    traverse(root);
    levels.forEach(function (lv) {
        for (let i = 0; i < lv.length - 1; i++) {
            lv[i].next = lv[i + 1];
        }
        lv[lv.length - 1].next = null;
    });
    return root;
};