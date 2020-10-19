// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    if (s == '') return true;
    let i = 0;
    let j = s.length - 1;
    let equals = true;
    while (i != j && i - 1 != j) {
        if (s[i] != s[j]) {
            equals = false;
            break;
        }
        i++;
        j--;
    }
    return equals;
};