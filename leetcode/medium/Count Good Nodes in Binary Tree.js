// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.

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
var goodNodes = function (root) {
    let path = [];
    let cnt = 0;
    function traverse(node) {
        if (node) {
            path.push(node.val);
            if (node.val == Math.max.apply(null, path)) cnt++;
            traverse(node.left);
            traverse(node.right);
            path.pop();
        }
    }
    traverse(root);
    return cnt;
};