// You are given a positive integer n, that is initially placed on a board.
// Every day, for 10^9 days, you perform the following procedure:
// - For each number x present on the board, find all numbers 1 <= i <= n such that x % i == 1.
// - Then, place those numbers on the board.
// Return the number of distinct integers present on the board after 10^9 days have elapsed.

/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n) {
    let seen = { [n]: false };
    while (!Object.values(seen).every(Boolean)) {
        Object.keys(seen).forEach(key => {
            if (!seen[key]) {
                for (let i = 1; i < key; i++) {
                    if (!(i in seen) && (key % i == 1)) {
                        seen[i] = false;
                    }
                }
                seen[key] = true;
            }
        });
    }
    return Object.keys(seen).length;
};