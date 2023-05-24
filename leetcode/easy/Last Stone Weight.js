// We have a collection of stones, each stone has a positive integer weight.
// Each turn, we choose the two heaviest stones and smash them together.
// Suppose the stones have weights x and y with x <= y.The result of this smash is:
// - If x == y, both stones are totally destroyed;
// - If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y - x.
// At the end, there is at most 1 stone left.
// Return the weight of this stone (or 0 if there are no stones left.)

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        let [a, b] = stones.splice(-2);
        if (a != b) {
            stones.push(b - a);
        }
    }
    return stones[0] || 0;
};