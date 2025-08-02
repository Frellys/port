// You are given a 0-indexed array mountain.
// Your task is to find all the peaks in the mountain array.
// Return an array that consists of indices of peaks in the given array in any order.

/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
    return mountain.reduce((acc, cur, cdx, arr) => {
        if (cur > arr[cdx - 1] && cur > arr[cdx + 1]) {
            acc.push(cdx);
        }
        return acc;
    }, []);
};