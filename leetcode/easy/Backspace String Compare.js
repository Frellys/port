// Given two strings S and T, return if they are equal when both are typed into empty text editors.# means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    let s1 = [];
    let s2 = [];
    S.split('').forEach(function (ch) {
        if (ch == '#') {
            if (s1.length != 0) s1.pop();
        }
        else {
            s1.push(ch);
        }
    });
    T.split('').forEach(function (ch) {
        if (ch == '#') {
            if (s2.length != 0) s2.pop();
        }
        else {
            s2.push(ch);
        }
    });
    return (s1.join('') == s2.join(''));
};