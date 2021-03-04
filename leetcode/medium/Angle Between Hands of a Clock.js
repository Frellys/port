// Given two numbers, hour and minutes.Return the smaller angle(in degrees) formed between the hour and the minute hand.

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
    let dm = minutes * 6;
    let dh = (hour % 12) * 30 + (minutes * 30 / 60);
    let a = Math.abs(dh - dm);
    let b = Math.abs(360 - a);
    return Math.min(a, b);
};