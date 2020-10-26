// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    //return nums.some(function (el, idx, arr) {
    //    return arr.indexOf(el) !== arr.lastIndexOf(el);
    //});
    let seen = [];
    let flag = false;
    for (let i = 0; i < nums.length; i++) {
        if (seen.includes(nums[i])) {
            flag = true;
            break;
        }
        else {

        }
    }
    return flag;
};