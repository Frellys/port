// Given a n - ary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    let max = 0;
    let cur = 0;
    function traverse(node) {
        if (node) {
            cur++;
            if (node.children.length == 0) {
                if (max < cur) max = cur;
            }
            node.children.forEach(function (el) {
                traverse(el);
            });
            cur--;
        }
    }
    traverse(root);
    return max;
};