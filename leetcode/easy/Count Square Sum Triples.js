// A square triple(a, b, c) is a triple where a, b, and c are integers and a2 + b2 = c2.
// Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
    let squares = new Array(n).fill(0).map((el, edx) => Math.pow(edx + 1, 2));
    let ca = squares.length - 2;
    let cb = squares.length - 1;
    let cc = squares.length;
    let ret = 0;
    for (let a = 0; a < ca; a++) {
        for (let b = a + 1; b < cb; b++) {
            for (let c = b + 1; c < cc; c++) {
                if (squares[a] + squares[b] == squares[c]) {
                    ret += 2;
                }
            }
        }
    }
    return ret;
};