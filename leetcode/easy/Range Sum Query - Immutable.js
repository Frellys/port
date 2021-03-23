// Given an integer array nums, find the sum of the elements between indices left and right inclusive, where (left <= right).
// Implement the NumArray class:
// - NumArray(int[] nums) initializes the object with the integer array nums.
// - int sumRange(int left, int right) returns the sum of the elements of the nums array in the range[left, right] inclusive
//   (i.e., sum(nums[left], nums[left + 1], ... , nums[right])).

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.array = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    let ret = 0;
    for (; i <= j; i++) {
        ret += this.array[i];
    }
    return ret;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */