const Graph = require('../src/index');

new Graph().draw();


const graph2 = new Graph()
    .setHtmlContainerElement('simplegraph2')
    .setDefaults({
        colour: 'red',
        opacity: 0.1
    })
    .setOrigin(50, 210)
    .setAxes(50);
const myPoint = graph2.point(-50, 50);
const figures = [
    graph2.line(graph2.point(100, 100)),
    graph2.polygon([
        graph2.point(50, 100),
        graph2.point(undefined, 100),
        graph2.point()
    ]),
    graph2.quadraticBezier(
        graph2.point(50, 100),
        graph2.point(undefined, 100),
        graph2.point()
    ),
    graph2.cubicBezier(
        graph2.point(50, 100),
        graph2.point(undefined, 100),
        graph2.point(),
        myPoint
    ),
    graph2.point(),
    myPoint.label(),
    graph2.point(-50, -50)
    .label(undefined, {
        offsetX: 0,
        offsetY: -2,
        textAnchor: 'middle'
    }).label(undefined, {
        offsetX: 0,
        offsetY: 0,
        fontSize: 20,
        textAnchor: 'middle'
    }).label().offset(0, 1)
];

graph2.draw(figures);

graph2
    .setOrigin(100, 150)
    .setAxes(80)
    .draw(figures);