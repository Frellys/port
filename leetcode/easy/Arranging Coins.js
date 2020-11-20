// You have a total of n coins that you want to form in a staircase shape, where every k - th row must have exactly k coins.
// Given n, find the total number of full staircase rows that can be formed.
// n is a non - negative integer and fits within the range of a 32 - bit signed integer.

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let steps = 0;
    while (true) {
        n = n - steps;
        if (steps >= n) return steps;
        steps++;
    }
};