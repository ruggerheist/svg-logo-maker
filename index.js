const inquirer = require('inquirer');
const { SVG } = require('./svg');

function start(){
inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What Shape Would You Like?',
      choices: [
        {
          name: 'Triangle',
          value: 'triangle'
        },
        {
          name: 'Square',
          value: 'square'
        },
        {
          name: 'Circle',
          value: 'circle'
        }
      ]
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What Color Would You Like Your Shape to Be?',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Please Enter Your Text, Up to 3 Characters',
      validate: (input) => {
        if (input.length <= 3){
          return true;
        } else {
          return 'Input must be up to 3 characters in length';
        }
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What Color Text Would You Like?'
    }

  ])
  .then((data) => {
    console.log(data);   
    const svg = new SVG(data);
    svg.render();
    console.log(svg);
  })  
}

start();