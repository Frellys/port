// You are given an integer array gifts denoting the number of gifts in various piles.
// Every second, you do the following:
// - Choose the pile with the maximum number of gifts.
// - If there is more than one pile with the maximum number of gifts, choose any.
// - Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.
// Return the number of gifts remaining after k seconds.

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
    let shift = function (arr) {
        let pos = 0;
        while (pos < arr.length && arr[pos] < arr[pos + 1]) {
            let tmp = arr[pos];
            arr[pos] = arr[pos + 1];
            arr[pos + 1] = tmp;
            pos++;
        }
    };
    gifts.sort((a, b) => b - a);
    while (k) {
        gifts[0] = Math.floor(Math.sqrt(gifts[0]));
        shift(gifts);
        k--;
    }
    return gifts.reduce((acc, cur) => acc + cur, 0);
};