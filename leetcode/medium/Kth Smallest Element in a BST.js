// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

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
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let vals = [root.val];
    function traverse(node) {
        if (node) {
            let l = traverse(node.left);
            if (typeof l !== 'undefined') vals.push(l);
            let r = traverse(node.right);
            if (typeof r !== 'undefined') vals.push(r);
            return node.val;
        }
    }
    traverse(root);
    vals.sort(function (a, b) { return a - b; });
    return vals[k - 1];
};