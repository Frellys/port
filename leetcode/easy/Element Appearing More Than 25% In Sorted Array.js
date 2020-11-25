// Given an integer array sorted in non - decreasing order, there is exactly one integer in the array that occurs more than 25 % of the time.
// Return that integer.

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    if (arr.length == 1) return arr[0];
    let cur = arr[0];
    let cnt = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == cur) {
            cnt++;
            if (cnt > arr.length / 4) return cur;
        }
        else {
            cur = arr[i];
            cnt = 1;
        }
    }
};