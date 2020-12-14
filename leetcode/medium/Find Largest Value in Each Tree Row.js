// Given the root of a binary tree, return an array of the largest value in each row of the tree(0 - indexed).

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
 * @return {number[]}
 */
var largestValues = function (root) {
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
    return levels.map(function (level) {
        return Math.max.apply(null, level);
    });
};