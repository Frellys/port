// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
// Two binary trees are considered leaf - similar if their leaf value sequence is the same.
// Return true if and only if the two given trees with head nodes root1 and root2 are leaf - similar.

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
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let arr1 = [];
    let arr2 = [];
    function traverse(node, arr) {
        if (node) {
            if (!node.left && !node.right) {
                arr.push(node.val);
            }
            traverse(node.left, arr);
            traverse(node.right, arr);
        }
    }
    traverse(root1, arr1);
    traverse(root2, arr2);
    return (arr1.join() == arr2.join());
};