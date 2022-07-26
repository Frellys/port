// Given a binary tree, find the lowest common ancestor(LCA) of two given nodes in the tree.
// According to the definition of LCA on Wikipedia:
// The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants
// (where we allow a node to be a descendant of itself).

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let ppat;
    let qpat;
    let cur = [];
    function traverse(node) {
        if (node) {
            cur.push(node);
            if (node == p && typeof ppat == 'undefined') ppat = Array.from(cur);
            if (node == q && typeof qpat == 'undefined') qpat = Array.from(cur);
            traverse(node.left);
            traverse(node.right);
            cur.pop();
        }
    }
    traverse(root);
    let ret = ppat[0];
    while (true) {
        let tmp = ppat.shift();
        if (tmp == qpat.shift()) {
            ret = tmp;
            if (tmp == p || tmp == q) break;
        }
        else {
            break;
        }

    }
    return ret;
};