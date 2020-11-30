// Given two binary trees, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let tree1 = [];
    let tree2 = [];
    let state;
    function traverse(node) {
        ((state == '1') ? tree1 : tree2).push((node) ? node.val : null);
        if (node) {
            traverse(node.left);
            traverse(node.right);
        }
    }
    state = '1';
    traverse(p);
    state = '2';
    traverse(q);
    return (tree1.join() == tree2.join());
};