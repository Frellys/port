// You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive(i.e., n == highLimit - lowLimit + 1),
// and an infinite number of boxes numbered from 1 to infinity.
// Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number.
// For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.
// Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls.

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    let boxes = {};
    for (let num = lowLimit; num <= highLimit; num++) {
        let key = num.toString().split('').reduce(function (acc, el) { return (acc + parseInt(el)); }, 0).toString();
        boxes[key] = (key in boxes) ? boxes[key] + 1 : 1;
    }
    return Math.max.apply(null, Object.values(boxes));
};