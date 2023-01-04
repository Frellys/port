// Given the root of a perfect binary tree, reverse the node values at each odd level of the tree.
// - For example, suppose the node values at level 3 are [2,1,3,4,7,11,29,18], then it should become [18,29,11,7,4,3,1,2].
// Return the root of the reversed tree.
// A binary tree is perfect if all parent nodes have two children and all leaves are on the same level.
// The level of a node is the number of edges along the path between it and the root node.

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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
    let seen = {};
    let traverse = function (node, level) {
        if (node) {
            if (level % 2) {
                if (!(level in seen)) {
                    seen[level] = [];
                }
                seen[level].push(node);
            }
            traverse(node.left, level + 1);
            traverse(node.right, level + 1);
        }
    };
    traverse(root, 0);
    Object.values(seen).forEach(arr => {
        arr.map(n => n.val).reverse().forEach((v, vdx) => arr[vdx].val = v);
    });
    return root;
};