// You are given an array of positive integers nums.
// Alice and Bob are playing a game.
// In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob.
// Alice wins if the sum of her numbers is strictly greater than the sum of Bob's numbers.
// Return true if Alice can win this game, otherwise, return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
    return new Set(nums.reduce((acc, cur) => {
        acc[+(cur < 10)] += cur;
        return acc;
    }, [0, 0])).size > 1;
};