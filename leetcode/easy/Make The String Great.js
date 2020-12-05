// Given a string s of lower and upper case English letters.
// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
// - 0 <= i <= s.length - 2
// - s[i] is a lower -case letter and s[i + 1] is the same letter but in upper -case or vice - versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them.You can keep doing this until the string becomes good.
// Return the string after making it good.The answer is guaranteed to be unique under the given constraints.

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    if (s.length == 0) return '';
    let str = s.split('');
    while (true) {
        let flag = true;
        for (let i = 0; i < str.length - 1; i++) {
            if (str[i] != str[i + 1]) {
                if (str[i] == str[i + 1].toLowerCase() ||
                    str[i] == str[i + 1].toUpperCase()) {
                    flag = false;
                    str.splice(i, 2);
                }
            }
        }
        if (flag || str.length == 0) break;
    }
    return str.join('');
};