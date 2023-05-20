const { Square } = require('./square');

describe ('Square', () => {
  it ('should return a square with text', () => {
    const data = {
      shapeColor: 'Blue',
      text: 'SVG',
      textColor: 'yellow'
    }
const expected = `<rect width="100%" height="100%" fill='${this.color}' />${this.text}<text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textColor}'>${data.text}</text>`
const square = new Square(data);
  })
});
