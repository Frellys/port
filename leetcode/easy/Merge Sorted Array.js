// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// Note:
// - The number of elements initialized in nums1 and nums2 are m and n respectively.
// - You may assume that nums1 has enough space(size that is equal to m + n) to hold additional elements from nums2.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < nums1.length; i++) {
        if (i < m) {
            if (nums2[0] < nums1[i]) {
                let temp = nums1[i];
                nums1[i] = nums2[0];
                nums2[0] = temp;
                let pos = 0;
                while (nums2[pos] > nums2[pos + 1]) {
                    let t = nums2[pos + 1];
                    nums2[pos + 1] = nums2[pos];
                    nums2[pos] = t;
                    pos++;
                    if (pos == n - 1) break;
                }
            }
        }
        else {
            nums1[i] = nums2[i - m];
        }
    }
};