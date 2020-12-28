// Given a binary tree, return the sum of values of its deepest leaves.

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
var deepestLeavesSum = function (root) {
    let max = 0;
    let sum = 0;
    function traverse(node, level) {
        if (node) {
            if (level == max) {
                sum += node.val;
            }
            if (level > max) {
                max = level;
                sum = node.val;
            }
            level++;
            traverse(node.left, level);
            traverse(node.right, level);
        }
    }
    traverse(root, max);
    return sum;
};