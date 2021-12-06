// Given the root of a binary tree, return the sum of every tree node's tilt.
// The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values.
// If a node does not have a left child, then the sum of the left subtree node values is treated as 0.
// The rule is similar if there the node does not have a right child.

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
var findTilt = function (root) {
    let ret = 0;
    let traverse = function (node) {
        if (node) {
            let l = traverse(node.left);
            let r = traverse(node.right);
            ret += Math.abs(l - r);
            return l + r + node.val;
        }
        return 0;
    };
    traverse(root);
    return ret;
};