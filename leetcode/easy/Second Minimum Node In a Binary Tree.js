// Given a non - empty special binary tree consisting of nodes with the non - negative value, where each node in this tree has exactly two or zero sub - node.
// If the node has two sub - nodes, then this node's value is the smaller value among its two sub-nodes.
// More formally, the property root.val = min(root.left.val, root.right.val) always holds.
// Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.
// If no such second minimum value exists, output - 1 instead.

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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    let ret = [];
    function traverse(node) {
        if (node) {
            ret.push(node.val);
            ret = Array.from(new Set(ret));
            ret.sort(function (a, b) { return a - b; });
            if (ret.length > 2) {
                ret.pop();
            }
            traverse(node.left);
            traverse(node.right);
        }
    }
    traverse(root);
    return (ret.length == 2) ? ret[1] : -1;
};