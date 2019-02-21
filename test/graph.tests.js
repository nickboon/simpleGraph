const test = require('tape');
const Point = require('../src/point');
const Sut = require('../src/graph');

test('new Graph().svg', assert => {
    assert.equal(
        new Sut().svg,
        [
            '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
            '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">',
            '<svg ', [
                'version="1.1" ',
                'xmlns="http://www.w3.org/2000/svg" ',
                'xmlns:xlink="http://www.w3.org/1999/xlink" ',
                'width="undefined" height="undefined"'
            ].join(''),
            '>',
            '</svg>'
        ].join(''),
        'should return expected SVG string.'
    );
    assert.end();
});

test('new Graph().setColour(colour).setFigures(figures).svg', assert => {
    assert.true(
        new Sut().setColour('black').setFigures([new Point().label()]).svg
        .includes('<text x="0" y="0" fill="undefined" opacity="undefined">0 0</text>'),
        'should add figures to the returned SVG string.'
    );
    assert.end();
});