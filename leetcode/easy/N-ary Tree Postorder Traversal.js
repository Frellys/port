// Given an n - ary tree, return the postorder traversal of its nodes' values.

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    let ret = [];
    function traverse(node) {
        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i]);
        }
        ret.push(node.val);
    }
    if (root) traverse(root);
    return ret;
};