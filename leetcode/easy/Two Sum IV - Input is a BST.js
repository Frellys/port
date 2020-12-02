// Given the root of a Binary Search Tree and a target number k,
// return true if there exist two elements in the BST such that their sum is equal to the given target.

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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let seen = [];
    let ret = false;
    function traverse(node) {
        if (node && !ret) {
            if (!seen.includes(node.val)) {
                if (seen.includes(k - node.val)) {
                    ret = true;
                }
                seen.push(node.val);
            }
            traverse(node.left);
            traverse(node.right);
        }
    }
    traverse(root);
    return ret;
};