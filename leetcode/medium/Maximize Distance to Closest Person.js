// You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).
// There is at least one empty seat, and at least one person sitting.
// Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
// Return that maximum distance to the closest person.

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let dist = 1;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] == 0) {
            let ld = 1;
            for (let l = i - 1; l >= 0; l--) {
                if (seats[l] && seats[l] == 1) break;
                ld++;
            }
            let rd = 1;
            for (let r = i + 1; r < seats.length; r++) {
                if (seats[r] && seats[r] == 1) break;
                rd++;
            }
            let min = Math.min(ld, rd);
            if (i == 0) min = rd;
            if (i == seats.length - 1) min = ld;
            if (dist < min) dist = min;
        }
    }
    return dist;
};