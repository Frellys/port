// Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
    let rank = 1;
    let minVal = Math.min(...nums) - 1;
    while (true) {
        let containsNumbers = false;
        let max = {
            pos: 0,
            val: minVal
        };
        for (let i = 0; i < nums.length; i++) {
            if (typeof nums[i] == 'number') {
                containsNumbers = true;
                if (max.val < nums[i]) {
                    max.val = nums[i];
                    max.pos = i;
                }
            }
        }
        if (!containsNumbers) {
            break;
        }
        else {
            nums[max.pos] = rank.toString();
            rank++;
        }
    }
    nums.forEach(function (rank, rdx) {
        switch (rank) {
            case '1': { nums[rdx] = 'Gold Medal'; break; }
            case '2': { nums[rdx] = 'Silver Medal'; break; }
            case '3': { nums[rdx] = 'Bronze Medal'; break; }
            default: { break; }
        }
    });
    return nums;
};