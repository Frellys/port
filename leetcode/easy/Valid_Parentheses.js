// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// - Open brackets must be closed by the same type of brackets.
// - Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 != 0) return false;
    let opened = [];
    let closed = [];
    let flag = true;
    s.split('').forEach(function (p) {
        if (flag) {
            if (p == '(' || p == '{' || p == '[') {
                opened.push(p);
            }
            else {
                closed.push(p);
                let tmp = opened.pop() + closed.shift();
                flag = (tmp == '()' || tmp == '{}' || tmp == '[]');
            }
        }
    });
    if (opened.length) flag = false;
    return flag;
};