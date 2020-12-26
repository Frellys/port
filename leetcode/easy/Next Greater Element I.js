// You are given two arrays(without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2.
// Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
// The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2.
// If it does not exist, output - 1 for this number.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let ret = [];
    for (let i = 0; i < nums1.length; i++) {
        let max = -1;
        for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++) {
            if (max < nums2[j] && nums2[j] > nums1[i]) {
                max = nums2[j];
                break;
            }
        }
        ret.push(max);
    }
    return ret;
};