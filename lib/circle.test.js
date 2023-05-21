const { Circle } = require('./circle');

describe ('Circle', () => {
  it ('should return a circle with test', () => {
const data = {
  shapeColor: 'Blue',
  text: 'SVG',
  textColor: 'yellow'
}
const circle = new Circle(data);
expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill='${data.shapeColor}' /><text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textColor}'>${data.text}</text>`)

})
});

