// You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].
// Implement the SmallestInfiniteSet class:
// - SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
// - int popSmallest() Removes and returns the smallest integer contained in the infinite set.
// - void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already in the infinite set.

var SmallestInfiniteSet = function () {
    this.vals = [true];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
    let idx = this.vals.indexOf(true);
    this.vals[idx] = false;
    this.vals.push(true);
    return (idx + 1);
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
    let idx = num - 1;
    if (idx < this.vals.length) {
        this.vals[idx] = true;
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */