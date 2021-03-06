// Given the root of a binary tree, return the leftmost value in the last row of the tree.

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
var findBottomLeftValue = function (root) {
    let maxVal = root.val;
    let maxLvl = 0;
    function traverse(node, level) {
        if (node) {
            if (level > maxLvl) {
                maxVal = node.val;
                maxLvl = level;
            }
            level++;
            traverse(node.left, level);
            traverse(node.right, level);
        }
    }
    traverse(root, 0);
    return maxVal;
};