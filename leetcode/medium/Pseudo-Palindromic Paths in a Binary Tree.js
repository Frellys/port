// Given a binary tree where node values are digits from 1 to 9.
// A path in the binary tree is said to be pseudo - palindromic if at least one permutation of the node values in the path is a palindrome.
// Return the number of pseudo - palindromic paths going from the root node to leaf nodes.

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
var pseudoPalindromicPaths = function (root) {
    let seen = {};
    let cnt = 0;
    let traverse = function (node) {
        if (node) {
            if (!(node.val in seen)) {
                seen[node.val] = 0;
            }
            seen[node.val]++;
            if (!node.left && !node.right) {
                if (Object.values(seen).map(v => v % 2).filter(v => v).length <= 1) {
                    cnt++;
                }
            }
            else {
                traverse(node.left);
                traverse(node.right);
            }
            seen[node.val]--;
        }
    };
    traverse(root);
    return cnt;
};