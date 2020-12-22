// Given a binary tree root and an integer target, delete all the leaf nodes with value target.
// Note that once you delete a leaf node with value target, if it's parent node becomes a leaf node and has the value target,
// it should also be deleted (you need to continue doing that until you can't).

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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
    function traverse(node) {
        if (node) {
            traverse(node.left);
            traverse(node.right);
            if (node.left && !node.left.left && !node.left.right && node.left.val === target) node.left = null;
            if (node.right && !node.right.left && !node.right.right && node.right.val === target) node.right = null;
        }
    }
    traverse(root);
    if (root.val === target && !root.left && !root.right) root = null;
    return root;
};