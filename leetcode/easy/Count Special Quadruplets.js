// Given a 0 - indexed integer array nums, return the number of distinct quadruplets(a, b, c, d) such that:
// - nums[a] + nums[b] + nums[c] == nums[d], and
// - a < b < c < d

/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
    let ret = 0;
    for (let adx = 0; adx < nums.length - 3; adx++) {
        for (let bdx = adx + 1; bdx < nums.length - 2; bdx++) {
            for (let cdx = bdx + 1; cdx < nums.length - 1; cdx++) {
                for (let ddx = cdx + 1; ddx < nums.length; ddx++) {
                    if (nums[adx] + nums[bdx] + nums[cdx] == nums[ddx]) {
                        ret++;
                    }
                }
            }
        }
    }
    return ret;
};