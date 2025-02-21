// You are given a string s and an integer k. Encrypt the string using the following algorithm:
// For each character c in s, replace c with the kth character after c in the string (in a cyclic manner).
// Return the encrypted string.

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {
    let shift = k % s.length;
    return s.slice(shift) + s.slice(0, shift);
};