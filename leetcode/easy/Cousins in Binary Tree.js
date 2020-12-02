// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k + 1.
// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
// Return true if and only if the nodes corresponding to the values x and y are cousins.

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    if (root.val == x || root.val == y) return false;
    let seen = [];
    let level = 0;
    function traverse(node) {
        if (node && seen.length < 2) {
            level++;
            if (node.left && (node.left.val == x || node.left.val == y)) {
                seen.push({
                    level: level + 1,
                    parent: node.val
                });
            }
            if (node.right && (node.right.val == x || node.right.val == y)) {
                seen.push({
                    level: level + 1,
                    parent: node.val
                });
            }
            traverse(node.left);
            traverse(node.right);
            level--;
        }
    }
    traverse(root);
    let ret = true;
    if (seen[0]['level'] != seen[1]['level']) ret = false;
    if (seen[0]['parent'] == seen[1]['parent']) ret = false;
    return (seen.length < 2) ? false : ret;
};