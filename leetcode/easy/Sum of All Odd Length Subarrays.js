// Given an array of positive integers arr, calculate the sum of all possible odd - length subarrays.
// A subarray is a contiguous subsequence of the array.
// Return the sum of all odd - length subarrays of arr.

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let sum = 0;
    let cur = 1;
    let len = arr.length;
    while (cur <= arr.length) {
        for (let i = 0; i <= len - cur; i++) {
            for (let j = 0; j < cur; j++) sum += arr[i + j];
        }
        cur += 2;
    }
    return sum;
};