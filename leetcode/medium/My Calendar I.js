// Implement a MyCalendar class to store your events.A new event can be added if adding the event will not cause a double booking.
// Your class will have the method, book(int start, int end).
// Formally, this represents a booking on the half open interval[start, end), the range of real numbers x such that start <= x < end.
// A double booking happens when two events have some non - empty intersection(ie., there is some time that is common to both events.)
// For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a double booking.
// Otherwise, return false and do not add the event to the calendar.

var MyCalendar = function () {
    this.intervals = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
    if (this.intervals.every(function (ival) { return (start >= ival.end || end <= ival.start) })) {
        this.intervals.push({ start: start, end: end });
        return true;
    }
    else {
        return false;
    }
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */