// Given a binary search tree(BST) with duplicates, find all the mode(s)(the most frequently occurred element) in the given BST.
// Assume a BST is defined as follows:
// - The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// - The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
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
 * @return {number[]}
 */
var findMode = function (root) {
    let max = 0;
    let freq = {};
    function traverse(node) {
        if (node) {
            let key = (node.val).toString();
            freq[key] = (key in freq) ? freq[key] + 1 : 1;
            if (max < freq[key]) max = freq[key];
            traverse(node.left);
            traverse(node.right);
        }
    }
    traverse(root);
    return Object.keys(freq).filter(function (key) { return freq[key] == max; });
};