// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
// Return the smallest level X such that the sum of all the values of nodes at level X is maximal.

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
var maxLevelSum = function (root) {
    let levels = [];
    let traverse = function (node, level) {
        if (node) {
            if (!levels[level]) {
                levels.push(0);
            }
            levels[level++] += node.val;
            traverse(node.left, level);
            traverse(node.right, level);
        }
    };
    traverse(root, 0);
    return levels.indexOf(Math.max.apply(null, levels)) + 1;
};