// A bus has n stops numbered from 0 to n - 1 that form a circle.
// We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and(i + 1) % n.
// The bus goes along both directions i.e.clockwise and counterclockwise.
// Return the shortest distance between the given start and destination stops.

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    let sum = 0;
    distance.forEach(function (d) { sum += d; });
    let cur = 0;
    let pos = start;
    while (pos != destination) {
        cur += distance[pos];
        pos++;
        if (pos == distance.length) pos = 0;
    }
    return Math.min(cur, sum - cur);
};