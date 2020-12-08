// A robot on an infinite grid starts at point(0, 0) and faces north.The robot can receive one of three possible types of commands:
// - (-2): turn left 90 degrees
// - (-1): turn right 90 degrees
// - (1 <= x <= 9): move forward x units
// Some of the grid squares are obstacles.
// The i - th obstacle is at grid point(obstacles[i][0], obstacles[i][1])
// If the robot would try to move onto them, the robot stays on the previous grid square instead(but still continues following the rest of the route.)
// Return the square of the maximum Euclidean distance that the robot will be from the origin.

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
    let max = 0;
    if (commands.length) {
        let obs = obstacles.map(function (el) { return (el[0] + ',' + (-el[1])); });
        obs = Array.from(new Set(obs));
        let dir = ['t', 'r', 'b', 'l'];
        let pos = { x: 0, y: 0 };
        commands.forEach(function (cmd) {
            if (cmd < 0) {
                if (cmd == -1) {
                    dir.push(dir.shift());
                }
                else {
                    dir.unshift(dir.pop());
                }
            }
            else {
                let steps = cmd;
                while (steps > 0) {
                    let temp = {
                        x: pos.x,
                        y: pos.y
                    };
                    switch (dir[0]) {
                        case 't': { temp.y--; break; }
                        case 'r': { temp.x++; break; }
                        case 'b': { temp.y++; break; }
                        case 'l': { temp.x--; break; }
                        default: { break; }
                    };
                    if (obs.includes(temp.x + ',' + temp.y)) {
                        break;
                    }
                    else {
                        pos.x = temp.x;
                        pos.y = temp.y;
                        steps--;
                    }
                }
                let cur = Math.pow(pos.x, 2) + Math.pow(pos.y, 2);
                if (max < cur) max = cur;
            }
        });
    }
    return max;
};