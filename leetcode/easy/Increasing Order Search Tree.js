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
var increasingBST = function (root) {
    let vals = [];
    function traverse(node) {
        if (node) {
            vals.push(node.val);
            traverse(node.left);
            traverse(node.right);
        }
    }
    traverse(root);
    vals.sort(function (a, b) { return a - b; });
    let ret = new TreeNode(vals.shift(), null, null);
    while (vals.length > 0) {
        let last = ret.right;
        ret.right = new TreeNode(vals.pop(), null, last);
    }
    return ret;
};