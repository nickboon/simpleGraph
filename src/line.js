const Figure = require('./figure');

class Line extends Figure {
    constructor(points, colour, opacity) {
        super(colour, opacity);
        this.figures = points;
        this.element = () => `<path d="M${points[0].x} ${points[0].y} L${points[1].x} ${points[1].y}" stroke="${this.colour}" opacity="${this.opacity}" />`;
    }
}

module.exports = Line;