// Given two binary search trees root1 and root2.
// Return a list containing all the integers from both trees sorted in ascending order.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    let ret = [];
    function traverse(node) {
        if (node) {
            ret.push(node.val);
            traverse(node.left);
            traverse(node.right);
        }
    };
    traverse(root1);
    traverse(root2);
    ret.sort(function (a, b) { return a - b; });
    return ret;
};