// You are given a string s consisting only of the characters '0' and '1'.
// In one operation, you can change any '0' to '1' or vice versa.
// The string is called alternating if no two adjacent characters are equal.
// For example, the string "010" is alternating, while the string "0100" is not.
// Return the minimum number of operations needed to make s alternating.

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let ops = {
        '0': 0,
        '1': 0
    };
    s.toString().split('').forEach(function (num, idx) {
        if (idx % 2 == 0) {
            ops[((num == '0') ? '1' : '0')]++;
        }
        else {
            ops[((num == '0') ? '0' : '1')]++;
        }
    });
    return Math.min(ops['0'], ops['1']);
};