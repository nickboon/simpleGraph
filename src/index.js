const Graph = require('./graph');
const Point = require('./point');
const Line = require('./line');

const defaultContainerId = 'simplegraph';

class Api extends Graph {
    constructor(containerId = defaultContainerId) {
        const container = document.getElementById(containerId);
        const {
            clientWidth,
            clientHeight
        } = container;
        super(clientWidth, clientHeight || clientWidth / 2);

        this.container = container;
    }

    point(x, y) {
        return new Point(x, y);
    }

    line(points, colour = 'black', opacity = .5) {
        return new Line(points, colour, opacity);
    }

    draw(figures) {
        const svg = this.setFigures(figures).svg;
        this.container.innerHTML = svg;
        return svg;
    }
}

module.exports = Api;