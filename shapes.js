const { Module } = require("module")

class Shapes {
    constructor(){
        this.color = ''
        this.color = function setColor(data){
        }
    }        
};

class Triangle extends Shapes {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill='${this.color}' />`
    }
};

class Circle extends Shapes {
    render(){
        return `<circle cx="150" cy="100" r="80" fill='${this.color}' />`
    }
};

class Square extends Shapes {
    render(){
        return `<rect width="100%" height="100%" fill='${this.color}' />`
    }
};


module.exports = {Triangle, Circle, Square};


{/* <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

</svg> */}