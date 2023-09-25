// You are given a 0-indexed 2D integer array nums representing the coordinates of the cars parking on a number line.
// For any index i, nums[i] = [starti, endi] where starti is the starting point of the ith car and endi is the ending point of the ith car.
// Return the number of integer points on the line that are covered with any part of a car.

/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
    return nums.reduce((acc, cur) => {
        for (let i = cur[0]; i <= cur[1]; i++) {
            acc.add(i);
        }
        return acc;
    }, new Set()).size;
};