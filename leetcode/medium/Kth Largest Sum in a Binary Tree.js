// You are given the root of a binary tree and a positive integer k.
// The level sum in the tree is the sum of the values of the nodes that are on the same level.
// Return the kth largest level sum in the tree (not necessarily distinct).
// If there are fewer than k levels in the tree, return -1.
// Note that two nodes are on the same level if they have the same distance from the root.

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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
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
    return levels.sort((a, b) => b - a)[k - 1] || -1;
};