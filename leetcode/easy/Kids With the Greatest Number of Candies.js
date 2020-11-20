// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them.
// Notice that multiple kids can have the greatest number of candies.

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let ret = [];
    candies.forEach(function (el) {
        let temp = el + extraCandies;
        let flag = true;
        for (let i = 0; i < candies.length; i++) {
            if (candies[i] > temp) {
                flag = false;
                break;
            }
        }
        ret.push(flag);
    });
    return ret;
};