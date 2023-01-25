// Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum.
// Note that the two subarrays must begin at different indices.
// Return true if these subarrays exist, and false otherwise.
// A subarray is a contiguous non-empty sequence of elements within an array.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
    let seen = nums.reduce((acc, cur, cdx, arr) => {
        if (cdx) {
            acc.push(cur + arr[cdx - 1]);
        }
        return acc;
    }, []);
    return (seen.length != new Set(seen).size);
};