// Given a non - empty array of digits representing a non - negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    return (BigInt(digits.join('')) + 1n).toString().split('');
};