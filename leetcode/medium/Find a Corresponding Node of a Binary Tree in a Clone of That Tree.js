// Given two binary trees original and cloned and given a reference to a node target in the original tree.
// The cloned tree is a copy of the original tree.
// Return a reference to the same node in the cloned tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
    let ret = false;
    function traverse(o_node, c_node) {
        if (ret === false && o_node) {
            if (o_node == target) {
                ret = c_node;
            }
            traverse(o_node.left, c_node.left);
            traverse(o_node.right, c_node.right);
        }
    }
    traverse(original, cloned);
    return ret;
};