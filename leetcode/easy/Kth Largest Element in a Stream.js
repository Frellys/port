// Design a class to find the kth largest element in a stream.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Implement KthLargest class:
// - KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// - int add(int val) Returns the element representing the kth largest element in the stream.

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.pos = k - 1;
    this.arr = nums;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.arr.push(val);
    this.arr.sort(function (a, b) { return b - a; });
    return this.arr[this.pos];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */