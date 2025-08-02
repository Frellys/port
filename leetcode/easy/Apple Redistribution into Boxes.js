// You are given an array apple of size n and an array capacity of size m.
// There are n packs where the ith pack contains apple[i] apples.
// There are m boxes as well, and the ith box has a capacity of capacity[i] apples.
// Return the minimum number of boxes you need to select to redistribute these n packs of apples into boxes.

/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
    let sum = apple.reduce((acc, cur) => acc + cur, 0);
    return capacity.sort((a, b) => b - a).reduce((acc, cur) => {
        if (sum > 0) {
            sum -= cur;
            acc++;
        }
        return acc;
    }, 0);
};