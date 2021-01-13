// Given an array A of positive integers, A[i] represents the value of the i - th sightseeing spot, and two sightseeing spots i and j have distance j - i between them.
// The score of a pair(i < j) of sightseeing spots is(A[i] + A[j] + i - j) : the sum of the values of the sightseeing spots, minus the distance between them.
// Return the maximum score of a pair of sightseeing spots.

/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
    let max = 0;
    for (let i = 0; i < A.length - 1; i++) {
        let dst = 1;
        for (let j = i + 1; j < A.length; j++) {
            let cur = A[i] + A[j] - dst;
            if (max < cur) max = cur;
            dst++;
        }
    }
    return max;
};