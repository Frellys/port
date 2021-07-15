// Given an array consists of non - negative integers,
// your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    let ret = 0;
    let len = (nums = nums.filter(n => n)).length;
    let iCap = len - 2;
    let jCap = len - 1;
    for (let i = 0; i < iCap; i++) {
        for (let j = i + 1; j < jCap; j++) {
            for (let k = j + 1, fSum = nums[i] + nums[j]; k < len; k++) {
                if (nums[k] < fSum) {
                    ret += (nums[j] + nums[k] > nums[i] && nums[k] + nums[i] > nums[j]);
                }
            }
        }
    }
    return ret;
};