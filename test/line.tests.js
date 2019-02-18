const test = require('tape');
const Point = require('../src/point');
const Sut = require('../src/line');

test('new Line(points).element[0]()', assert => {
    assert.deepEqual(
        new Sut([new Point(), new Point()]).elements[0](),
        '<path d="M0 0 L0 0" stroke="undefined" opacity="undefined" />',
        'should return a line element.'
    );
    assert.end();
});

test('new Point(points).label().element', assert => {
    assert.notDeepEqual(
        new Sut([new Point(), new Point()]).label().elements,
        [],
        'should return label elements.'
    );
    assert.end();
});