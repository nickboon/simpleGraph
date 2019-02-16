const test = require('tape');
const Sut = require('../src/figure');

test('new Figure().elements', assert => {
    assert.deepEqual(
        new Sut().elements,
        [],
        'should be an empty array.'
    );
    assert.end();
});

test('ParentFigure.elements', assert => {
    assert.doesNotThrow(
        () => new Subclass1().elements.map(e => {
            if (typeof (e) !== 'function') throw 'Element was not a function.';
        }),
        'should be a flat array of functions.'
    );
    assert.end();
});

test('ParentFigure.setColour()', assert => {
    assert.equal(
        new Subclass1('blue').setColour('red').figures[0].colour,
        'red',
        'should also set the colour of child figures.'
    );
    assert.end();
});

test('ParentFigure.setOpacity()', assert => {
    assert.equal(
        new Subclass1('blue', 0).setOpacity(1).figures[0].opacity,
        1,
        'should also set the opacity of child figures.'
    );
    assert.end();
});


class Subclass1 extends Sut {
    constructor(colour, opacity) {
        super(colour, opacity);
        this.element = () => {};
        this.figures.push(new Subclass2(colour, opacity));
    }
}

class Subclass2 extends Sut {
    constructor(colour, opacity) {
        super(colour, opacity);
        this.element = () => {};
    }
}