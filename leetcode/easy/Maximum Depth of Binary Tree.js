// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let max = 0;
    let cur = 0;
    function traverse(node) {
        if (node) {
            cur++;
            if (max < cur) max = cur;
            traverse(node.left);
            traverse(node.right);
            cur--;
        }
    }
    traverse(root);
    return max;
};