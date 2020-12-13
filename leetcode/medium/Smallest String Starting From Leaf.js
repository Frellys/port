// Given the root of a binary tree, each node has a value from 0 to 25 representing the letters 'a' to 'z': a value of 0 represents 'a', a value of 1 represents 'b', and so on.
// Find the lexicographically smallest string that starts at a leaf of this tree and ends at the root.
// (As a reminder, any shorter prefix of a string is lexicographically smaller: for example, "ab" is lexicographically smaller than "aba".
// A leaf of a node is a node that has no children.)

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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
    let alphabet = {
        0: 'a',
        1: 'b',
        2: 'c',
        3: 'd',
        4: 'e',
        5: 'f',
        6: 'g',
        7: 'h',
        8: 'i',
        9: 'j',
        10: 'k',
        11: 'l',
        12: 'm',
        13: 'n',
        14: 'o',
        15: 'p',
        16: 'q',
        17: 'r',
        18: 's',
        19: 't',
        20: 'u',
        21: 'v',
        22: 'w',
        23: 'x',
        24: 'y',
        25: 'z'
    };
    let paths = [];
    let cur = [];
    function traverse(node) {
        if (node) {
            cur.push(node.val);
            if (!node.left && !node.right) {
                paths.push(cur.map(function (n) { return alphabet[n]; }).reverse().join(''));
            }
            traverse(node.left);
            traverse(node.right);
            cur.pop();
        }
    };
    traverse(root);
    paths.sort();
    return paths[0];
};