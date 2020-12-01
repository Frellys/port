// Given a non - empty binary tree, return the average value of the nodes on each level in the form of an array.

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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let ret = [];
    let level = -1;
    function traverse(node) {
        if (node) {
            level++;
            if (typeof ret[level] == 'undefined') {
                ret.push([node.val]);
            }
            else {
                ret[level].push(node.val);
            }
            traverse(node.left);
            traverse(node.right);
            level--;
        }
    }
    traverse(root);
    ret.forEach(function (el, edx) {
        ret[edx] = el.reduce(function (a, b) { return a + b; }) / el.length;
    });
    return ret;
};