// Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]... .

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    let tmp = [];
    while (nums.length - tmp.length > 1) {
        tmp.push(nums.pop());
    }
    for (let i = 0; i < nums.length && tmp.length != 0; i += 2) {
        nums.splice(i + 1, 0, tmp.pop());
    }
    function check_passed() {
        let flag = true;
        for (let i = 1; i < nums.length; i++) {
            if (i % 2 == 0) {
                if (nums[i] >= nums[i - 1]) { flag = false; break; }
            }
            else {
                if (nums[i] <= nums[i - 1]) { flag = false; break; }
            }
        }
        return flag;
    }
    while (!check_passed()) {
        nums.push(nums.shift());
        nums.push(nums.shift());
    }
};