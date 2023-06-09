const { SVG } = require('./svg');
const fs = require('fs');

afterEach(() =>{
    try {fs.unlinkSync('examples/shape.svg');}
    catch{}
})
describe('SVG', () => {
    it ('should return a string of the triangle svg file data', () => {
       const data = {
            shape: 'triangle',
            shapeColor: 'red',
            text: 'SVG',
            textColor: 'white'
       }
       const svg = new SVG(data);
       svg.render();
       fs.readFileSync('examples/shape.svg', 'utf8', (file) => {
        expect(file).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill='${data.shapeColor}' /><text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textColor}'>${data.text}</text></svg>`)
       })
    })
    it ('should return a string of the square svg file data', () => {
        const data = {
             shape: 'square',
             shapeColor: 'blue',
             text: 'RAH',
             textColor: 'red'
        }
        const svg = new SVG(data);
        svg.render();
        fs.readFileSync('examples/shape.svg', 'utf8', (file) => {
         expect(file).toEqual(`<rect width="100%" height="100%" fill='${data.shapeColor}' /><text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textColor}'>${data.text}</text></svg>`)
        })
     })
     it ('should return a string of the circle svg file data', () => {
        const data = {
             shape: 'circle',
             shapeColor: 'red',
             text: 'BOB',
             textColor: 'blue'
        }
        const svg = new SVG(data);
        svg.render();
        fs.readFileSync('examples/shape.svg', 'utf8', (file) => {
         expect(file).toEqual(`<circle cx="150" cy="100" r="80" fill='${data.shapeColor}' /><text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textColor}'>${data.text}</text></svg>`)
        })
     })
})
