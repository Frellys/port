// Given two arrays, write a function to compute their intersection.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let ret = [];
    (nums1.length >= nums2.length ? nums2 : nums1).forEach(function (el) {
        if (!ret.includes(el)) {
            if ((nums1.length >= nums2.length ? nums1 : nums2).includes(el)) {
                ret.push(el);
            }
        }
    });
    return ret;
};