// You are given a positive integer arrivalTime denoting the arrival time of a train in hours,
// and another positive integer delayedTime denoting the amount of delay in hours.
// Return the time when the train will arrive at the station.

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
    return (arrivalTime + delayedTime) % 24;
};