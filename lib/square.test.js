const { Square } = require('./square');

describe ('Square', () => {
  it ('should return a square with text', () => {
    const data = {
      shapeColor: 'Blue',
      text: 'SVG',
      textColor: 'yellow'
    }
const square = new Square(data);
expect(square.render()).toEqual(`<rect width="100%" height="100%" fill='${data.shapeColor}' /><text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textColor}'>${data.text}</text>`)
})
});
