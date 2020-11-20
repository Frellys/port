// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.
// Return the destination city, that is, the city without any path outgoing to another city.
// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let ret = '';
    paths.forEach(function (path) {
        if (ret == '') {
            let flag = true;
            for (let i = 0; i < paths.length; i++) {
                if (path[1] == paths[i][0]) {
                    flag = false;
                    break;
                }
            }
            if (flag) ret = path[1];
        }
    });
    return ret;
};