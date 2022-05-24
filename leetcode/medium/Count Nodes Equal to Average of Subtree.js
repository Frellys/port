// Given the root of a binary tree,
// return the number of nodes where the value of the node is equal to the average of the values in its subtree.

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
var averageOfSubtree = function (root) {
    let cnt = 0;
    let traverse = function (node) {
        if (node) {
            let sl = traverse(node.left);
            let sr = traverse(node.right);
            let tree = sl.concat(sr, node.val);
            let sum = tree.reduce((acc, cur) => acc + cur, 0);
            cnt += (Math.floor(sum / tree.length) === node.val);
            return tree;
        }
        return [];
    };
    traverse(root);
    return cnt;
};