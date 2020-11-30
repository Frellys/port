// Given a binary tree and a sum, determine if the tree has a root - to - leaf path such that adding up all the values along the path equals the given sum.

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
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    let flag = false;
    let cur = 0;
    function traverse(node) {
        if (flag) return;
        if (node) {
            cur += node.val;
            if (!node.left && !node.right && cur == sum) flag = true;
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            cur -= node.val;
        }
    }
    traverse(root);
    return flag;
};