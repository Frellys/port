// Given an array consists of non - negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    let ret = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] != 0 && nums[j] != 0 && nums[k] != 0) {
                    if (nums[i] + nums[j] > nums[k] &&
                        nums[j] + nums[k] > nums[i] &&
                        nums[k] + nums[i] > nums[j]) {
                        ret++;
                    }
                }
            }
        }
    }
    return ret;
};