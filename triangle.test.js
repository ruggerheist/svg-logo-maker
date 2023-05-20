const { Triangle } = require('./triangle');

describe ('Triangle', () => {
 it ('should return a triangle with text', () => {
  const data = {
    shapeColor: 'Blue',
    text: 'SVG',
    textColor: 'yellow'
  }
const expected = `<polygon points="150, 18 244, 182 56, 182" fill='${data.shapeColor}' /><text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textColor}'>${data.text}</text>`
const triangle = new Triangle(data);
})
});