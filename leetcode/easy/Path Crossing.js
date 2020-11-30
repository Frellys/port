// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively.
// You start at the origin(0, 0) on a 2D plane and walk on the path specified by path.
// Return True if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited.
// Return False otherwise.

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let ret = false;
    let pts = [];
    pts.push([0, 0].toString());
    path.split('').forEach(function (p) {
        if (!ret) {
            let cur = [
                parseInt(pts[pts.length - 1].split(',')[0]),
                parseInt(pts[pts.length - 1].split(',')[1])
            ];
            switch (p) {
                case 'N': { cur[1]--; break; }
                case 'S': { cur[1]++; break; }
                case 'E': { cur[0]--; break; }
                case 'W': { cur[0]++; break; }
                default: {
                    break;
                }
            }
            if (!pts.includes(cur.toString())) pts.push(cur.toString());
            else ret = true;
        }
    });
    return ret;
};