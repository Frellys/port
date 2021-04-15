// Design a stack which supports the following operations.
// Implement the CustomStack class:
// - CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack or do nothing if the stack reached the maxSize.
// - void push(int x) Adds x to the top of the stack if the stack hasn't reached the maxSize.
// - int pop() Pops and returns the top of stack or - 1 if the stack is empty.
// - void inc(int k, int val) Increments the bottom k elements of the stack by val.If there are less than k elements in the stack, just increment all the elements in the stack.

/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    this.max = maxSize;
    this.cur = 0;
    this.array = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.cur < this.max) {
        this.cur++;
        this.array.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    let ret = -1;
    if (this.cur > 0) {
        this.cur--;
        ret = this.array.pop();
    }
    return ret;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    let border = Math.min(this.cur, k);
    for (let i = 0; i < border; i++) {
        this.array[i] += val;
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */