const Graph = require('../src/index');

const graph = new Graph();

graph.draw([
    graph.line([
        graph.point(50, 50),
        graph.point(-50, -50)
    ]).label()
]);