// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children.
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
    let seen = {};
    let traverse = function (node, level) {
        if (node) {
            if (level in seen) {
                seen[level].next = node;
            }
            seen[level] = node;
            traverse(node.left, level + 1);
            traverse(node.right, level + 1);
        }
    };
    traverse(root, 0);
    return root;
};