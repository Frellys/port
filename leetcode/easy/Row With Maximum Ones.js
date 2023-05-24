// Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.
// In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.
// Return an array containing the index of the row, and the number of ones in it.

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    return mat.reduce((acc, cur, cdx) => {
        let sum = cur.filter(Boolean).length;
        return (sum > acc[1]) ? [cdx, sum] : acc;
    }, [0, 0]);
};