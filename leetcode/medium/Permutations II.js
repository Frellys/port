// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let ret = [];
    ret.push(nums.join(','));
    function generate(k, arr) {
        let l = k - 1;
        if (k == 1) {
            return;
        }
        else {
            for (let i = 0; i < l; i++) {
                generate(k - 1, arr);
                if (l % 2 == 0) {
                    let s = arr[0];
                    arr[0] = arr[l];
                    arr[l] = s;
                }
                else {
                    let s = arr[i];
                    arr[i] = arr[l];
                    arr[l] = s;
                }
                let cur = arr.join(',');
                if (!ret.includes(cur)) ret.push(cur);
            }
            generate(k - 1, arr);
        }
    }
    generate(nums.length, nums);
    ret.forEach(function (el, edx, el_arr) {
        el_arr[edx] = el.split(',');
        el_arr[edx].forEach(function (num, ndx, num_arr) {
            num_arr[ndx] = parseInt(num);
        });
    });
    return ret;
};