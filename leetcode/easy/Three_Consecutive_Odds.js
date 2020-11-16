// Given an integer array arr, return true if there are three consecutive odd numbers in the array.Otherwise, return false.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    if (arr.length < 3) return false;
    let flag = false;
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] % 2 != 0 && arr[i - 1] % 2 != 0 && arr[i + 1] % 2 != 0) {
            flag = true;
            break;
        }
    }
    return flag;
};