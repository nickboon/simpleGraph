const Figure = require('./figure');

class Graph extends Figure {
    constructor(width, height, colour, opacity) {
        super(colour, opacity);
        this.width = width;
        this.height = height;
    }

    get svg() {
        return [
            '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
            '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">',
            '<svg ', [
                'version="1.1" ',
                'xmlns="http://www.w3.org/2000/svg" ',
                'xmlns:xlink="http://www.w3.org/1999/xlink" ',
                `width="${this.width}" height="${this.height}"`
            ].join(''),
            '>',
            this.elements.map(e => e()).join(''),
            '</svg>'
        ].join('');
    }

    setFigures(figures) {
        this.figures = figures;
        return this;
    }
}

module.exports = Graph;