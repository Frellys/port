// Given the root of a binary tree, calculate the vertical order traversal of the binary tree.
// For each node at position(row, col), its left and right children will be at positions(row + 1, col - 1) and(row + 1, col + 1) respectively.
// The root of the tree is at(0, 0).
// The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column.
// There may be multiple nodes in the same row and same column.In such a case, sort these nodes by their values.
// Return the vertical order traversal of the binary tree.

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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    let seen = {};
    let traverse = function (node, pos) {
        if (node) {
            if ((pos.c in seen) == false) {
                seen[pos.c] = {};
            }
            if ((pos.r in seen[pos.c]) == false) {
                seen[pos.c][pos.r] = [];
            }
            seen[pos.c][pos.r].push(node.val);
            traverse(node.left, { r: pos.r + 1, c: pos.c - 1 });
            traverse(node.right, { r: pos.r + 1, c: pos.c + 1 });
        }
    };
    traverse(root, { r: 0, c: 0 });
    let keys = Object.keys(seen).map(k => +k).sort((a, b) => a - b);
    return keys.map(function (key) {
        let cur = [];
        Object.keys(seen[key]).map(k => +k).sort((a, b) => a - b).forEach(function (r) { seen[key][r].sort((a, b) => a - b).forEach(el => cur.push(el)) });
        return cur;
    });
};