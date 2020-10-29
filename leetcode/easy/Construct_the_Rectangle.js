// A web developer needs to know how to design a web page's size.
// So, given a specific rectangular web page�s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:
// - The area of the rectangular web page you designed must equal to the given target area.
// - The width W should not be larger than the length L, which means L >= W.
// - The difference between length L and width W should be as small as possible.
// Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.

/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    let l = 1;
    let w = area;
    let dist = Math.abs(l - w);
    let curl = 1;
    while (curl <= area / 2) {
        if (area % curl == 0) {
            if (dist < Math.abs(curl - area / curl)) break;
            l = curl;
            w = area / curl;
            dist = Math.abs(l - w);
        }
        curl++;
    }
    return [Math.max(w, l), Math.min(w, l)];
};