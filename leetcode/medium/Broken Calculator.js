// On a broken calculator that has a number showing on its display, we can perform two operations:
// - Double: Multiply the number on the display by 2, or;
// - Decrement: Subtract 1 from the number on the display.
// Initially, the calculator is displaying the number X.
// Return the minimum number of operations needed to display the number Y.

/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function (X, Y) {
    if (X >= Y) return (X - Y);
    let mid = Math.ceil(Y / 2);
    return ((X >= mid) ? (X - mid) : brokenCalc(X, mid)) + (2 * mid - Y + 1);
};