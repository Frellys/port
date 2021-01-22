// Alice and Bob have candy bars of different sizes:
// A[i] is the size of the i - th bar of candy that Alice has,
// and B[j] is the size of the j - th bar of candy that Bob has.
// Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.
// (The total amount of candy a person has is the sum of the sizes of candy bars they have.)
// Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.
// If there are multiple answers, you may return any one of them.
// It is guaranteed an answer exists.

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
    let sum_a = A.reduce(function (acc, el) { return (acc + el); }, 0);
    let sum_b = B.reduce(function (acc, el) { return (acc + el); }, 0);
    let ret;
    outer: for (let adx = 0; adx < A.length; adx++) {
        let tmp_a = sum_a - A[adx];
        let tmp_b = sum_b + A[adx];
        for (let bdx = 0; bdx < B.length; bdx++) {
            if (tmp_a + B[bdx] == tmp_b - B[bdx]) {
                ret = [A[adx], B[bdx]];
                break outer;
            }
        }
    }
    return ret;
};