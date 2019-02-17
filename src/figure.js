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
        this.figures.forEach(f => f.setColour(colour));

        console.log('in setColour', this.figures);

        return this;
    }

    setOpacity(opacity) {
        this.opacity = opacity;
        this.figures.forEach(f => f.setOpacity(opacity));
        return this;
    }

    label() {
        this.figures.forEach(f => f.label());
        return this;
    }
}

module.exports = Figure;