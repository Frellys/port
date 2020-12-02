// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

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
var rightSideView = function (root) {
    let ret = [];
    let level = -1;
    function traverse(node) {
        if (node) {
            level++;
            ret[level] = node.val;
            traverse(node.left);
            traverse(node.right);
            level--;
        }
    }
    traverse(root);
    return ret;
};