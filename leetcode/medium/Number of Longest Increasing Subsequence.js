// Given an integer array nums, return the number of longest increasing subsequences.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    let n = nums.length;
    if (n <= 1) return n;
    let lens = [];
    let cnt = [];
    for (let i = 0; i < n; i++) {
        lens.push(0);
        cnt.push(1);
    } 
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (lens[j] >= lens[i]) {
                    lens[i] = lens[j] + 1;
                    cnt[i] = cnt[j];
                } else {
                    if (lens[j] + 1 == lens[i]) {
                        cnt[i] += cnt[j];
                    }
                }
            }
        }
    }
    let max = 0;
    let ret = 0;
    lens.forEach(function (l) {
        max = Math.max(max, l);
    });
    for (let i = 0; i < n; i++) {
        if (lens[i] == max) {
            ret += cnt[i];
        }
    }
    return ret;
};