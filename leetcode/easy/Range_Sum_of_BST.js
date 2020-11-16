// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range[low, high].

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let ret = 0;
    function traverse(node) {
        if (node) {
            if (node.val >= low && node.val <= high) ret += node.val;
            traverse(node.left);
            traverse(node.right);
        }
    }
    traverse(root);
    return ret;
};