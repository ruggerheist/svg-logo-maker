const { Triangle } = require('./triangle');
const { Circle } = require('./circle');
const { Square } = require('./square');
const fs = require('fs');

class SVG{
    constructor(data){
      if (data.shape === 'triangle') {
        this.shape = new Triangle(data)
      } else if (data.shape === 'circle') {
        this.shape = new Circle(data)
      } else if (data.shape === 'square') {
        this.shape = new Square(data)
      } else {
        throw new Error('Please Select 1 of the 3 Shapes')
      }      
      console.log(this.shape);
    }     
    async render(){
        let svg = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">${this.shape.render()}</svg>`;
        fs.writeFile('examples/shape.svg', svg, (err) => //not saving to examples
        err ? console.log(err) : console.log('Your Logo Has Been Created Successfully!')
        );
    }
};

module.exports = { SVG };