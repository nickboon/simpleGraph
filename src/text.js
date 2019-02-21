const Figure = require('./figure');

class Text extends Figure {
    constructor(x, y, text, colour, opacity) {
        super(colour, opacity);
        this.element = () => `<text x="${x}" y="${y}" fill="${this.colour}" opacity="${this.opacity}">${text}</text>`;
    }
}

module.exports = Text;