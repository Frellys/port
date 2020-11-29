// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
// Return a list of pairs in ascending order(with respect to pairs), each pair[a, b] follows
// - a, b are from arr
// - a < b
// - b - a equals to the minimum absolute difference of any two elements in arr

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort(function (a, b) { return a - b; });
    let diff = arr[1] - arr[0];
    for (let i = 1; i < arr.length; i++) {
        let curDiff = arr[i] - arr[i - 1];
        if (curDiff < diff) diff = curDiff;
        if (diff == 1) break;
    }
    let ret = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] == diff) ret.push([arr[i - 1], arr[i]]);
    }
    return ret;
};