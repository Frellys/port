// You are given a 0-indexed two-dimensional integer array nums.
// Return the largest prime number that lies on at least one of the diagonals of nums.
// In case, no prime is present on any of the diagonals, return 0.

/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
    let isPrime = function (num) {
        let cap = Math.sqrt(num);
        for (let i = 2; i <= cap; i++) {
            if (!(num % i)) {
                return false;
            }
        }
        return num > 1;
    };
    return Array.from(new Set(nums.reduce((acc, cur, cdx) => {
        return acc.concat(cur[cdx], cur[cur.length - 1 - cdx]);
    }, []))).sort((a, b) => b - a).find(isPrime) || 0;
};