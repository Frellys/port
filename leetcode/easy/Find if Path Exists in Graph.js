// There is a bi - directional graph with n vertices, where each vertex is labeled from 0 to n - 1(inclusive).
// The edges in the graph are represented as a 2D integer array edges,
// where each edges[i] = [ui, vi] denotes a bi - directional edge between vertex ui and vertex vi.
// Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
// You want to determine if there is a valid path that exists from vertex start to vertex end.
// Given edges and the integers n, start, and end, return true if there is a valid path from start to end, or false otherwise.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function (n, edges, start, end) {
    let ret = false;
    let seen = new Set();
    let nodes = {};
    edges.forEach(function (edge) {
        edge.forEach(el => { if ((el in nodes) === false) nodes[el] = []; });
        nodes[edge[0]].push(edge[1]);
        nodes[edge[1]].push(edge[0]);
    });
    let traverse = function (ndx) {
        if (!ret && !seen.has(ndx)) {
            if (ndx == end) {
                ret = true;
            }
            else {
                seen.add(ndx);
                nodes[ndx].forEach(n => traverse(n));
            }
        }
    };
    traverse(start);
    return ret;
};