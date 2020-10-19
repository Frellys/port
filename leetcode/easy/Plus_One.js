// Given a non - empty array of digits representing a non - negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let pos = digits.length - 1;
    let needInc = true;
    while (needInc && pos >= 0) {
        digits[pos]++;
        if (digits[pos] == 10) {
            digits[pos] = 0;
            if (pos == 0) {
                digits.unshift(1);
                break;
            }
        }
        else {
            needInc = false;
        }
        pos--;
    }
    return digits;
};