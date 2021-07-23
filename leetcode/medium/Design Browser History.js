// You have a browser of one tab where you start on the homepage and you can visit another url,
// get back in the history number of steps or move forward in the history number of steps.
// Implement the BrowserHistory class:
// - BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
// - void visit(string url) Visits url from the current page.
//   It clears up all the forward history.
// - string back(int steps) Move steps back in history.
//   If you can only return x steps in the history and steps > x, you will return only x steps.
//   Return the current url after moving back in history at most steps.
// - string forward(int steps) Move steps forward in history.
//   If you can only forward x steps in the history and steps > x, you will forward only x steps.
//   Return the current url after forwarding in history at most steps.

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.node = {
        url: homepage,
        prev: false,
        next: false
    };
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    this.node.next = {
        url: url,
        prev: this.node,
        next: false
    };
    this.node = this.node.next;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    while (this.node.prev && steps--) {
        this.node = this.node.prev;
    }
    return this.node.url;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    while (this.node.next && steps--) {
        this.node = this.node.next;
    }
    return this.node.url;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */