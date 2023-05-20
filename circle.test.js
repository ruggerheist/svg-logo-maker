const { Circle } = require('./circle');


describe ('Circle', () => {
  it ('should return a circle with test', () => {
const data = {
  shapeColor: 'Blue',
  text: 'SVG',
  textColor: 'yellow'
}
const expected = `<rect width="100%" height="100%" fill='${this.color}' />${this.text}<text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textColor}'>${data.text}</text>`
const circle = new Circle(data);
})
});

