// A binary tree is named Even - Odd if it meets the following conditions:
// The root of the binary tree is at level index 0, its children are at level index 1, their children are at level index 2, etc.
// For every even - indexed level, all nodes at the level have odd integer values in strictly increasing order(from left to right).
// For every odd - indexed level, all nodes at the level have even integer values in strictly decreasing order(from left to right).
// Given the root of a binary tree, return true if the binary tree is Even - Odd, otherwise return false.

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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
    let levels = [];
    function traverse(node, level) {
        if (node) {
            if (!levels[level]) levels.push([]);
            levels[level].push(node.val);
            level++;
            traverse(node.left, level);
            traverse(node.right, level);
        }
    };
    traverse(root, 0);
    let flag = (levels[0] & 2 != 0);
    for (let i = 1; i < levels.length && flag; i++) {
        if (!levels[i].every(function (el, edx) {
            let parity = ((i % 2 == 0) ? el % 2 != 0 : el % 2 == 0);
            let sort = ((edx > 0) ? ((i % 2 == 0) ? el > levels[i][edx - 1] : el < levels[i][edx - 1]) : true);
            return parity && sort;
        })) flag = false;
    }
    return flag;
};