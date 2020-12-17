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
    let paths = [];
    let cur = [];
    function traverse(node) {
        if (node) {
            cur.push(node.val);
            if (!node.left && !node.right) {
                paths.push(cur.join(''));
            }
            traverse(node.left);
            traverse(node.right);
            cur.pop();
        }
    };
    traverse(root);
    let cnt = 0;
    paths.forEach(function (path) {
        let freq = {};
        for (let key of path) {
            freq[key] = (key in freq) ? freq[key] + 1 : 1;
        }
        let keys = Object.keys(freq);
        if (keys.filter(function (key) { return (freq[key] == 1); }).length <= 1) {
            if (keys.length - keys.filter(function (key) { return (freq[key] % 2 == 0); }).length <= 1) cnt++;
        }
    });
    return cnt;
};