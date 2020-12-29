// Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.
// Recall that:
// - The node of a binary tree is a leaf if and only if it has no children
// - The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of its children is d + 1.
// - The lowest common ancestor of a set S of nodes, is the node A with the largest depth such that every node in S is in the subtree with root A.

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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
    let ret;
    let max = 0;
    function traverse(node, level) {
        if (node) {
            level++;
            if (max < level) max = level;
            let l = traverse(node.left, level) || level;
            let r = traverse(node.right, level) || level;
            if (l == max && r == max) ret = node;
            return Math.max(l, r);
        }
    }
    traverse(root, 0);
    return ret;
};