// You are given an integer n.An array nums of length n + 1 is generated in the following way:
// - nums[0] = 0
// - nums[1] = 1
// - nums[2 * i] = nums[i] when 2 <= 2 * i <= n
// - nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
// Return the maximum integer in the array nums.

/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
    let max;
    if (n == 0 || n == 1) {
        max = n
    }
    else {
        n++;
        max = 0;
        let arr = [0, 1];
        for (let i = 2; i < n; i++) {
            let tmp = (i % 2 == 0) ? arr[i / 2] : arr[(i - 1) / 2] + arr[((i - 1) / 2) + 1];
            if (max < tmp) max = tmp;
            arr.push(tmp);
        }
    }
    return max;
};