// We have an array A of integers, and an array queries of queries.
// For the i - th query val = queries[i][0], index = queries[i][1], we add val to A[index].
// Then, the answer to the i - th query is the sum of the even values of A.
// (Here, the given index = queries[i][1] is a 0 - based index, and each query permanently modifies the array A.)
// Return the answer to all queries.Your answer array should have answer[i] as the answer to the i - th query.

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
    let ret = [];
    queries.forEach(function (q) {
        A[q[1]] += q[0];
        let sum = 0;
        for (let i = 0; i < A.length; i++) {
            if (A[i] % 2 == 0) sum += A[i];
        }
        ret.push(sum);
    });
    return ret;
};