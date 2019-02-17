const test = require('tape');
const Sut = require('../src/point');

test('new Point().element()', assert => {
    assert.deepEqual(
        new Sut().elements,
        [],
        'should return empty array.'
    );
    assert.end();
});

test('new Point().label().element', assert => {
    assert.notDeepEqual(
        new Sut().label().elements,
        [],
        'should return label elements.'
    );
    assert.end();
});

test('new Point().setColour(colour).label()element()', assert => {
    assert.deepEqual(
        new Sut(1, 2).setColour('red').label().elements[0](),
        '<text x="1" y="2" fill="red" opacity="undefined>1 2</text>',
        'should return expected element.'
    );
    assert.end();
});