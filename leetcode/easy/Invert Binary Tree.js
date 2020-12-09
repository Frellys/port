// Invert a binary tree.

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
var invertTree = function (root) {
    function traverse(node) {
        if (node) {
            traverse(node.left);
            traverse(node.right);
            [node.left, node.right] = [node.right, node.left];
        }
    };
    traverse(root);
    return root;
};