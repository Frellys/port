// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    let temp = [
        nums.pop(),
        nums.pop(),
        nums.pop()
    ];
    for (let n = 0; n < 3 && nums.length; n++) {
        temp.push(nums.shift());
    }
    let max = temp[0] * temp[1] * temp[2];
    for (let i = 0; i < temp.length - 2; i++) {
        for (let j = i + 1; j < temp.length - 1; j++) {
            for (let k = j + 1; k < temp.length; k++) {
                let cur = temp[i] * temp[j] * temp[k];
                if (max < cur) max = cur;
            }
        }
    }
    return max;
};