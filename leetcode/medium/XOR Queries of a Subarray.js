// Given the array arr of positive integers and the array queries where queries[i] = [Li, Ri],
// for each query i compute the XOR of elements from Li to Ri(that is, arr[Li] xor arr[Li + 1] xor ...xor arr[Ri]).
// Return an array containing the result for the given queries.

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    return queries.map(function (q) {
        let x = arr[q[0]];
        if (q[0] != q[1]) {
            for (let i = q[0] + 1; i <= q[1]; i++) {
                x ^= arr[i];
            }
        }
        return x;
    });
};