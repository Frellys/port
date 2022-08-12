// You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where:
// - horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, and
// - verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.
// Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts.
// Since the answer can be a large number, return this modulo 10^9 + 7.

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
    let getMaxCut = function (len, arr) {
        arr.sort((a, b) => a - b);
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            max = Math.max(max, arr[i] - arr[i - 1]);
        }
        return BigInt(Math.max(max, len - arr[arr.length - 1]));
    };
    let maxHor = getMaxCut(w, verticalCuts);
    let maxVer = getMaxCut(h, horizontalCuts);
    return (maxHor * maxVer) % BigInt(1e9 + 7);
};