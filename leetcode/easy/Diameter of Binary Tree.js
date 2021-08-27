// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
// This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

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
var diameterOfBinaryTree = function (root) {
    let max = 0;
    let traverse = function (node) {
        let depth = -1;
        if (node) {
            let dl = traverse(node.left) + 1;
            let dr = traverse(node.right) + 1;
            depth = Math.max(dl, dr);
            let temp = dl + dr;
            if (max < temp) {
                max = temp;
            }
        }
        return depth;
    };
    traverse(root);
    return max;
};