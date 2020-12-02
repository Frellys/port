// Given a binary tree, return the zigzag level order traversal of its nodes' values.
// (ie, from left to right, then right to left for the next level and alternate between).

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let ret = [];
    let level = -1;
    function traverse(node) {
        if (node) {
            level++;
            if (typeof ret[level] == 'undefined') ret.push([]);
            ret[level][(level % 2 == 0) ? 'push' : 'unshift'](node.val);
            traverse(node.left);
            traverse(node.right);
            level--;
        }
    }
    traverse(root);
    return ret;
};