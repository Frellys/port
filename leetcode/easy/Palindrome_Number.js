// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    let str = x.toString().split('').reverse().join('');
    return (x == parseInt(str)) ? true : false;
};