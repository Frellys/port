// Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.
// Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

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
 * @return {string}
 */
var tree2str = function (root) {
    let traverse = function (node) {
        let cur = '';
        if (node) {
            cur = node.val.toString();
            if (node.left || node.right) {
                cur += `(${traverse(node.left)})`;
                if (node.right) {
                    cur += `(${traverse(node.right)})`;
                }
            }
        }
        return cur
    };
    return traverse(root);
};