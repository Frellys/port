// Given three integer arrays nums1, nums2, and nums3,
// return a distinct array containing all the values that are present in at least two out of the three arrays.
// You may return the values in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    let a = [
        new Set(nums1),
        new Set(nums2),
        new Set(nums3)
    ];
    let ret = new Set();
    a.forEach(function (cur, cdx) {
        let ndx = (cdx + 1) % 3;
        cur.forEach(function (el) {
            if (a[ndx].has(el)) {
                ret.add(el);
            }
        });
    });
    return Array.from(ret);
};