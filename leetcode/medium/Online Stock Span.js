// Write a class StockSpanner which collects daily price quotes for some stock, and returns the span of that stock's price for the current day.
// The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards)
// for which the price of the stock was less than or equal to today's price.
// For example, if the price of a stock over the next 7 days were[100, 80, 60, 70, 60, 75, 85], then the stock spans would be[1, 1, 1, 2, 1, 4, 6].

var StockSpanner = function () {
    this.list = false;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    this.list = {
        val: price,
        next: this.list
    };
    let ret = 0;
    let cur = this.list;
    while (cur.val <= price) {
        ret++;
        if (cur.next) {
            cur = cur.next;
        }
        else {
            break;
        }
    }
    return ret;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */