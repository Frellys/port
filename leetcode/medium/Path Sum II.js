// Given a binary tree and a sum, find all root - to - leaf paths where each path's sum equals the given sum.

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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    let ret = [];
    let cur = [];
    function traverse(node) {
        if (node) {
            cur.push(node.val);
            if (!node.left && !node.right) {
                if (cur.reduce(function (a, b) { return a + b; }) == sum) {
                    ret.push(cur.slice());
                }
            }
            traverse(node.left);
            traverse(node.right);
            cur.pop();
        }
    }
    traverse(root);
    return ret;
};