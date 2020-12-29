// Given the root of a binary tree, the depth of each node is the shortest distance to the root.
// Return the smallest subtree such that it contains all the deepest nodes in the original tree.
// A node is called the deepest if it has the largest depth possible among any node in the entire tree.
// The subtree of a node is tree consisting of that node, plus the set of all descendants of that node.

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
var subtreeWithAllDeepest = function (root) {
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