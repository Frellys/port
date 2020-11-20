// Given a VPS represented as string s, return the nesting depth of s.

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let max = 0;
    let cur = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') cur++;
        if (s[i] == ')') cur--;
        if (max < cur) max = cur;
    }
    return max;
};