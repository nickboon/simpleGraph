const Figure = require('./figure');
const Text = require('./text');

class Point extends Figure {
    constructor(x = 0, y = 0, colour, opacity) {
        super(colour, opacity);
        this.x = x;
        this.y = y;
    }

    label() {
        this.figures = [new Text(
            this.x,
            this.y,
            `${this.x} ${this.y}`,
            this.colour,
            this.opacity)];
        return this;
    };
}

module.exports = Point;