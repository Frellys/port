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
    let max = {
        idx: 0,
        sum: root.val
    };
    let sums = [];
    let level = 0;
    function traverse(node) {
        if (node) {
            if (!sums[level]) sums.push([]);
            sums[level].push(node.val)
            level++;
            traverse(node.left);
            traverse(node.right);
            level--;
        }
    }
    traverse(root);
    sums.forEach(function (el, edx) {
        let cur = el.reduce(function (a, b) { return a + b; });
        if (max.sum < cur) {
            max.idx = edx;
            max.sum = cur;
        }
    });
    return (max.idx + 1);
};