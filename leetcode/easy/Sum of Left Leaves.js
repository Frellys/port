// Find the sum of all left leaves in a given binary tree.

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
var sumOfLeftLeaves = function (root) {
    let sum = 0;
    let left;
    function traverse(node) {
        if (!node.left && !node.right) {
            if (left) sum += node.val;
        }
        else {
            if (node.left) {
                left = true;
                traverse(node.left);
            }
            if (node.right) {
                left = false;
                traverse(node.right);
            }
        }
    }
    if (root) traverse(root);
    return sum;
};