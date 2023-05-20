const { Shape } = require('./shape');
const { Triangle } = require('./triangle');
const { Circle } = require('./circle');
const { Square } = require('./square');

test ('Should render triangle with text', () => {
    const data = {
        shapeColor: 'Blue',
        text: 'SVG',
        textColor: 'yellow'
      }
    const expected = `<polygon points="150, 18 244, 182 56, 182" fill='${data.shapeColor}' /><text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textColor}'>${data.text}</text>`
    const triangle = new Triangle(data);
    expect(triangle.render(data)).toBe(expected);
});


//for svg.render use fs.readfile to check against string