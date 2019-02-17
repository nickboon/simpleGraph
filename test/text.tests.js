const test = require('tape');
const Sut = require('../src/text');

test('new Text().element()', assert => {
    assert.equal(
        new Sut().elements[0](),
        '<text x="undefined" y="undefined" fill="undefined" opacity="undefined>undefined</text>',
        'should return the expected element.'
    );
    assert.end();
});

test('new Text().setColour(colour).element()', assert => {
    assert.equal(
        new Sut().setColour('blue').elements[0](),
        '<text x="undefined" y="undefined" fill="blue" opacity="undefined>undefined</text>',
        'should return the expected element.'
    );
    assert.end();
});