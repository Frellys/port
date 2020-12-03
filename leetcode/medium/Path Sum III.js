// You are given a binary tree in which each node contains an integer value.
// Find the number of paths that sum to a given value.
// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
// The tree has no more than 1,000 nodes and the values are in the range - 1,000,000 to -1,000,000.

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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    let ret = 0;
    let vals = [];
    function traverse(node) {
        if (node) {
            vals.push(node.val);
            for (let i = 0; i < vals.length; i++) {
                if (vals.reduce(function (a, b, idx) { return (idx > i) ? a + b : b; }) == sum) ret++;
            }
            traverse(node.left);
            traverse(node.right);
            vals.pop();
        }
    }
    traverse(root);
    return ret;
};