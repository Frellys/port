// Given a binary search tree with non - negative values, find the minimum absolute difference between values of any two nodes.

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
var getMinimumDifference = function (root) {
    let arr = [];
    let min = Math.abs(root.val - ((root.left) ? root.left.val : root.right.val));
    function traverse(node) {
        if (node && min != 0) {
            if (arr.includes(node.val)) {
                min = 0;
            }
            else {
                arr.forEach(function (el) {
                    let cur = Math.abs(el - node.val);
                    if (min > cur) min = cur;
                });
                arr.push(node.val);
            }
            traverse(node.left);
            traverse(node.right);
        }
    }
    traverse(root);
    return min;
};