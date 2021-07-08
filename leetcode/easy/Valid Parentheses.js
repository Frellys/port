// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// - Open brackets must be closed by the same type of brackets.
// - Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = [];
    let pars = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    let flag = true;
    for (let p of s) {
        if (p in pars) {
            arr.push(p);
        }
        else {
            if (p != pars[arr.pop()]) {
                flag = false;
                break;
            }
        }
    }
    return !arr.length && flag;
};