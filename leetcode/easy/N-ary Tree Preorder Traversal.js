// Given an n - ary tree, return the preorder traversal of its nodes' values.

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    let ret = [];
    function traverse(node) {
        ret.push(node.val);
        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i]);
        }
    }
    if (root) traverse(root);
    return ret;
};