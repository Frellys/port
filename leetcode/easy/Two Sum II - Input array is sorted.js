// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let ret = [];
    for (let i = 0; i < numbers.length && ret.length == 0; i++) {
        for (let j = 0; j < numbers.length && ret.length == 0; j++) {
            if (i != j && numbers[i] + numbers[j] == target) {
                ret.push(i + 1);
                ret.push(j + 1);
            }
        }
    }
    return ret;
};