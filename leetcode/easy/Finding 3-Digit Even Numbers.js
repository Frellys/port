// You are given an integer array digits, where each element is a digit.The array may contain duplicates.
// You need to find all the unique integers that follow the given requirements:
// - The integer consists of the concatenation of three elements from digits in any arbitrary order.
// - The integer does not have leading zeros.
// - The integer is even.
// For example, if the given digits were[1, 2, 3], integers 132 and 312 follow the requirements.
// Return a sorted array of the unique integers.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
    let ret = new Set();
    for (let i = 0; i < digits.length; i++) {
        if (digits[i]) {
            for (let j = 0; j < digits.length; j++) {
                if (i != j) {
                    for (let k = 0; k < digits.length; k++) {
                        if (i != k && j != k && digits[k] % 2 == 0) {
                            ret.add(digits[i] * 100 + digits[j] * 10 + digits[k]);
                        }
                    }
                }
            }
        }
    }
    return Array.from(ret).sort();
};