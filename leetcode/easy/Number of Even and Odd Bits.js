// You are given a positive integer n.
// Let even denote the number of even indices in the binary representation of n (0-indexed) with value 1.
// Let odd denote the number of odd indices in the binary representation of n (0-indexed) with value 1.
// Return an integer array answer where answer = [even, odd].

/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
    return n.toString(2).split('').reverse().reduce((acc, cur, cdx) => {
        acc[cdx % 2] += +cur;
        return acc;
    }, [0, 0]);
};