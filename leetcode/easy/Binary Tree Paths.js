// Given a binary tree, return all root - to - leaf paths.

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (!root) return [];
    let ret = [];
    let cur = [];
    function traverse(node) {
        if (node) {
            cur.push(node.val);
            if (!node.left && !node.right) {
                ret.push(cur.join('->'));
            }
            else {
                traverse(node.left);
                traverse(node.right);
            }
            cur.pop();
        }
    }
    traverse(root);
    return ret;
};