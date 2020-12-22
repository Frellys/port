// Given the root of a binary tree, determine if it is a valid binary search tree(BST).
// A valid BST is defined as follows:
// - The left subtree of a node contains only nodes with keys less than the node's key.
// - The right subtree of a node contains only nodes with keys greater than the node's key.
// - Both the left and right subtrees must also be binary search trees.

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
 * @return {boolean}
 */
var isValidBST = function (root) {
    function traverse(node) {
        if (node) {
            let cur = node.val.toString();
            let l = traverse(node.left);
            let r = traverse(node.right);
            return ([l, cur, r].filter(Boolean).join(','));
        }
    }
    let arr = traverse(root).split(',').map(function (el) { return parseInt(el); });
    let srt = Array.from(new Set(arr)).sort(function (a, b) { return (a - b); });
    return (arr.join() == srt.join());
};