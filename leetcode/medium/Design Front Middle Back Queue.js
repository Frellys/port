// Design a queue that supports push and pop operations in the front, middle, and back.
// Implement the FrontMiddleBack class:
// FrontMiddleBack() Initializes the queue.
// - void pushFront(int val) Adds val to the front of the queue.
// - void pushMiddle(int val) Adds val to the middle of the queue.
// - void pushBack(int val) Adds val to the back of the queue.
// - int popFront() Removes the front element of the queue and returns it.If the queue is empty, return -1.
// - int popMiddle() Removes the middle element of the queue and returns it.If the queue is empty, return -1.
// - int popBack() Removes the back element of the queue and returns it.If the queue is empty, return -1.
// Notice that when there are two middle position choices, the operation is performed on the frontmost middle position choice.
// For example:
// - Pushing 6 into the middle of[1, 2, 3, 4, 5] results in [1, 2, 6, 3, 4, 5].
// - Popping the middle from[1, 2, 3, 4, 5, 6] returns 3 and results in [1, 2, 4, 5, 6].

var FrontMiddleBackQueue = function () {
    this.queue = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
    this.queue.unshift(val);
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
    let idx = Math.floor(this.queue.length / 2);
    this.queue.splice(idx, 0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
    this.queue.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
    return (this.queue.length) ? this.queue.shift() : -1;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
    let idx = Math.floor((this.queue.length - 1) / 2);
    return (this.queue.length) ? this.queue.splice(idx, 1)[0] : -1;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
    return (this.queue.length) ? this.queue.pop() : -1;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */