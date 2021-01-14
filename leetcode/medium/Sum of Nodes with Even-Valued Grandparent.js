// Given a binary tree, return the sum of values of nodes with even - valued grandparent.
// (A grandparent of a node is the parent of its parent, if it exists.)
// If there are no nodes with an even - valued grandparent, return 0.

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
var sumEvenGrandparent = function (root) {
    let sum = 0;
    let traverse = function (node) {
        if (node) {
            if (node.val % 2 == 0) {
                if (node.left) {
                    if (node.left.left) sum += node.left.left.val;
                    if (node.left.right) sum += node.left.right.val;
                }
                if (node.right) {
                    if (node.right.left) sum += node.right.left.val;
                    if (node.right.right) sum += node.right.right.val;
                }
            }
            traverse(node.left);
            traverse(node.right);
        }
    };
    traverse(root);
    return sum;
};