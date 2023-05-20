const { SVG } = require('./svg');
const fs = require('fs');

describe('SVG', () => {
    it ('should return a string of the svg file data', () => {
        const data = <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill='jump' /><text x="150" y="125" font-size="60" text-anchor="middle" fill='blue'>bob</text></svg>
        const svg = new SVG(data);
        fs.readFile('./svg.js', 'utf8', () => {
            })
        })
    })

//for svg.render use fs.readfile to check against string