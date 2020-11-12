// You are given an integer array nums and you have to return a new counts array.
// The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    let ret = [];
    nums.forEach(function (num, ndx) {
        let cnt = 0;
        for (let i = ndx + 1; i < nums.length; i++) {
            if (nums[i] < num) cnt++;
        }
        ret.push(cnt);
    });
    return ret;
};