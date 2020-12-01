// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

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
var minDepth = function (root) {
    let min = 0;
    let cur = 0;
    function traverse(node) {
        if (node) {
            cur++;
            if (!node.left && !node.right) {
                if (min == 0) {
                    min = cur;
                }
                else {
                    if (min > cur) min = cur;
                }
            }
            traverse(node.left);
            traverse(node.right);
            cur--;
        }
    }
    traverse(root);
    return min;
};