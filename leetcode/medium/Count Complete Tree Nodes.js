// Given a complete binary tree, count the number of nodes.

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
var countNodes = function (root) {
    let cnt = 0;
    let traverse = function (node) {
        if (node) {
            cnt++;
            traverse(node.left);
            traverse(node.right);
        }
    };
    traverse(root);
    return cnt;
};