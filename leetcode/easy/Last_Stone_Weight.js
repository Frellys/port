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
        stones.sort(function (a, b) {
            return a - b;
        });
        let a = stones.pop();
        let b = stones.pop();
        if (a != b) {
            stones.push(Math.abs(a - b));
        }
    }
    return (stones.length == 0) ? 0 : stones[0];
};