const inquirer = require('inquirer');
const {Triangle} = require('./shapes');
//require fs

class SVG{
    constructor(){
        this.shape = '';
        this.text = ''
    }
    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
    setText(color, text){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill='${color}'>${text}</text>`
    }
    setShape(inputShape){
        this.shape = inputShape.render();
    }
}

function start(){
inquirer
  .prompt([
    {
      type: 'input',
      name: 'color',
      message: 'What Color Would You Like Your Shape to Be?',
    },

    // need shapes, text and text color
    /* {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    }, */
  ])
  .then((data) => {
    console.log(data);
    let shape = new Triangle()// switch case or if else
    shape.setColor(`${data.color}`);
    console.log(shape);
    const svg = new SVG();
    svg.setText('WHITE', 'SVG');// interpolate for user input
    svg.setShape(shape);
    console.log(svg);
  })
}

start();