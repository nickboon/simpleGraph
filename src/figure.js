class Figure {
    constructor(colour, opacity) {
        this.colour = colour;
        this.opacity = opacity;
        this.figures = [];
    }

    get elements() {
        const result = [];
        this.figures.forEach(f => result.push(...f.elements));

        if (this.element)
            result.push(this.element);

        return result;
    }

    setColour(colour) {
        this.colour = colour;
        this.figures.forEach(f => f.colour = colour);
        return this;
    }

    setOpacity(opacity) {
        this.opacity = opacity;
        this.figures.forEach(f => f.opacity = opacity);
        return this;
    }
}

module.exports = Figure;