// Given numBottles full water bottles, you can exchange numExchange empty water bottles for one full water bottle.
// The operation of drinking a full water bottle turns it into an empty bottle.
// Return the maximum number of water bottles you can drink.

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let ret = numBottles;
    while (numBottles >= numExchange) {
        let swap = parseInt(numBottles / numExchange);
        ret += swap;
        numBottles = swap + (numBottles % numExchange);
    }
    return ret;
};