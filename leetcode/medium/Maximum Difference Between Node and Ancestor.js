// Given the root of a binary tree, find the maximum value V for which there exist different nodes A and B where V = | A.val - B.val | and A is an ancestor of B.
// A node A is an ancestor of B if either: any child of A is equal to B, or any child of A is an ancestor of B.

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
var maxAncestorDiff = function (root) {
    let path = [];
    let max = 0;
    function traverse(node) {
        if (node) {
            path.forEach(function (el) {
                let cur = Math.abs(el - node.val);
                if (max < cur) max = cur;
            });
            path.push(node.val);
            traverse(node.left);
            traverse(node.right);
            path.pop();
        }
    }
    traverse(root);
    return max;
};