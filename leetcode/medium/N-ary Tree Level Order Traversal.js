// Given an n - ary tree, return the level order traversal of its nodes' values.

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let ret = [];
    function traverse(node, level) {
        if (node) {
            if (!ret[level]) ret.push([]);
            ret[level].push(node.val);
        }
        level++;
        node.children.forEach(function (el) {
            traverse(el, level);
        });
    }
    if (root) traverse(root, 0);
    return ret;
};