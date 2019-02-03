const defaults = new WeakMap();

class SvgElementFactory {
    constructor(options = {}) {
        defaults.set(this, options);
    }

    createOpenSvg(width, height) {
        return [
            '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
            '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">',
            '<svg', [
                '\tversion="1.1"',
                'xmlns="http://www.w3.org/2000/svg"',
                'xmlns:xlink="http://www.w3.org/1999/xlink"',
                `width="${width}" height="${height}"`
            ].join('\n\t'),
            '>'
        ].join('\n');
    }

    createCloseSvg() {
        return '</svg>';
    }

    createText(
        text,
        point, {
            opacity = defaults.get(this).opacity,
            colour = defaults.get(this).colour,
            fontSize = defaults.get(this).fontSize,
            textAnchor = defaults.get(this).textAnchor,
        } = {}
    ) {
        return `<text x="${point.x}" y="${point.y}" fill="${colour}" opacity="${opacity}" text-anchor="${textAnchor}" font-size="${fontSize}">${text}</text>`;
    };

    createLine(pointA, pointB, colour = defaults.get(this).colour, opacity = defaults.get(this).opacity) {
        return `<path d="M${pointA.x} ${pointA.y} L${pointB.x} ${pointB.y}" stroke="${colour}" opacity="${opacity}" />`;
    }

    createPolygon(points, colour = defaults.get(this).colour, opacity = defaults.get(this).opacity) {
        return `<polygon points="${points.map(p => `${p.x},${p.y}`).join(' ')}" fill="${colour}" opacity="${opacity}" />`;
    }

    createQuadraticBezier(pointA, pointB, pointC, colour = defaults.get(this).colour, opacity = defaults.get(this).opacity) {
        return `<path d="M${pointA.x} ${pointA.y} Q${pointB.x} ${pointB.y}, ${pointC.x} ${pointC.y}" stroke="${colour}" fill="none" opacity="${opacity}" />`;
    }

    createCubicBezier(pointA, pointB, pointC, pointD, colour = defaults.get(this).colour, opacity = defaults.get(this).opacity) {
        return `<path d="M${pointA.x} ${pointA.y} C${pointB.x} ${pointB.y}, ${pointC.x} ${pointC.y}, ${pointD.x} ${pointD.y}" stroke="${colour}" fill="none" opacity="${opacity}" />`;
    }
}

module.exports = SvgElementFactory;