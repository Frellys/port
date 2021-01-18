// You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.
// You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi.
// For example, if you have a rectangle[4, 6], you can cut it to get a square with a side length of at most 4.
// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.
// Return the number of rectangles that can make a square with a side length of maxLen.

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
    let freq = {};
    let max = 0;
    rectangles.forEach(function (el) {
        let key = Math.min.apply(null, el);
        if (max < key) max = key;
        key = key.toString();
        freq[key] = (key in freq) ? freq[key] + 1 : 1;
    });
    return freq[max];
};