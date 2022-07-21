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
    function traverse(node, level) {
        if (node) {
            ret[level++] = node.val;
            traverse(node.left, level);
            traverse(node.right, level);
        }
    }
    traverse(root, 0);
    return ret;
};