// Given an integer n.
// No - Zero integer is a positive integer which doesn't contain any 0 in its decimal representation.
// Return a list of two integers[A, B] where:
// - A and B are No - Zero integers.
// - A + B = n
// It's guarateed that there is at least one valid solution. If there are many valid solutions you can return any of them.

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    for (let i = 0; i < n; i++) {
        if (i.toString().indexOf('0') == -1) {
            if ((n - i).toString().indexOf('0') == -1) {
                return [i, (n - i)];
            }
        }
    }
};