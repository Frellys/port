// Given the array of integers nums, you will choose two different indices i and j of that array.
// Return the maximum value of(nums[i] - 1) * (nums[j] - 1).

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max = (nums[0] - 1) * (nums[1] - 1);
    nums.forEach(function (el, edx) {
        for (let i = 0; i < nums.length; i++) {
            if (i != edx) {
                let temp = (el - 1) * (nums[i] - 1);
                if (max < temp) max = temp;
            }
        }
    });
    return max;
};