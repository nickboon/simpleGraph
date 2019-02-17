const Figure = require('./figure');
const Text = require('./text');

class Point extends Figure {
    constructor(x, y, colour, opacity) {
        super(colour, opacity);
        this.x = x;
        this.y = y;
    }

    label() {
        this.figures.push(new Text(
            this.x,
            this.y,
            `${this.x} ${this.y}`,
            this.colour,
            this.opacity));
        return this;
    };
}

module.exports = Point;