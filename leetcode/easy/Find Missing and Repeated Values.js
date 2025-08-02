// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2].
// Each integer appears exactly once except a which appears twice and b which is missing.
// The task is to find the repeating and missing numbers a and b.
// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    return grid.flat().reduce((acc, cur, cdx, arr) => {
        if (arr.indexOf(cur) != arr.lastIndexOf(cur)) {
            acc[0] = cur;
        }
        if (!arr.includes(cdx + 1)) {
            acc[1] = cdx + 1;
        }
        return acc;
    }, [0, 0]);
};