// Given a binary tree, check whether it is a mirror of itself(ie, symmetric around its center).

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;
    if (!root.left && !root.right) return true;
    let paths = [[root.val]];
    function traverse(node, level) {
        if (node) {
            if (!paths[level]) paths.push([]);
            paths[level].push((node.left) ? node.left.val : null);
            paths[level].push((node.right) ? node.right.val : null);
            level++;
            traverse(node.left, level);
            traverse(node.right, level);
        }
    };
    traverse(root, 1);
    let flag = true;
    while (paths.length > 1) {
        let cur = paths.pop();
        if (cur.length % 2 != 0) {
            flag = false;
            break;
        }
        while (flag && cur.length > 0) {
            if (cur.shift() != cur.pop()) flag = false;
        }
    }
    return flag;
};