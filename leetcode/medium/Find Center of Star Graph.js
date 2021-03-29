// There is an undirected star graph consisting of n nodes labeled from 1 to n.
// A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.
// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi.
// Return the center of the given star graph.

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    let nodes = {};
    edges.forEach(function (el) {
        let k1 = el[0].toString();
        let k2 = el[1].toString();
        if ((k1 in nodes) == false) {
            nodes[k1] = 0;
        }
        if ((k2 in nodes) == false) {
            nodes[k2] = 0;
        }
        nodes[k1]++;
        nodes[k2]++;
    });
    let max = Math.max.apply(null, Object.values(nodes));
    return Object.keys(nodes).find(function (key) { return nodes[key] == max; });
};