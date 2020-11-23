// Given two arrays, write a function to compute their intersection.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let ret = [];
    nums1.forEach(function (el) {
        if (nums2.includes(el)) {
            ret.push(el);
            nums2.splice(nums2.indexOf(el), 1);
        }
    });
    return ret;
};