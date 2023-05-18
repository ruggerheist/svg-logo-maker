const { Module } = require("module")

class Shapes {
    constructor(){
        this.color = ''
    }
    setColor(color){
        this.color = color
    }
};

class Triangle extends Shapes {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill='${this.color}' />`
    }
};

module.exports = {Triangle};


{/* <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

</svg> */}