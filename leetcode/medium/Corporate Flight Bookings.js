// There are n flights that are labeled from 1 to n.
// You are given an array of flight bookings bookings, where bookings[i] = [firsti, lasti, seatsi]
// represents a booking for flights firsti through lasti(inclusive) with seatsi seats reserved for each flight in the range.
// Return an array answer of length n, where answer[i] is the total number of seats reserved for flight i.

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    let ret = new Array(n).fill(0);
    bookings.forEach(function ([first, last, seats]) {
        last = Math.min(last, n);
        first--;
        for (let i = first; i < last; i++) {
            ret[i] += seats;
        }
    });
    return ret;
};