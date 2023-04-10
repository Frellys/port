// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays.
// If there is no common integer amongst nums1 and nums2, return -1.
// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let ret = -1;
    let args = Array.from(arguments);
    let pos = new Array(args.length).fill(0);
    while (pos.every((p, pdx) => p < args[pdx].length)) {
        let minVal = Math.min.apply(null, pos.map((p, pdx) => args[pdx][p]));
        if (pos.every((p, pdx) => args[pdx][p] === minVal)) {
            ret = minVal;
            break;
        }
        let flag = true;
        pos = pos.map((p, pdx) => {
            if (flag && args[pdx][p] == minVal) {
                flag = false;
                p++;
            }
            return p;
        });
    }
    return ret;
};