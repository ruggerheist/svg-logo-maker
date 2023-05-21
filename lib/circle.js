const { Shape } = require('./shape');


class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="100" r="80" fill='${this.color}' />${this.text}`
    }
};




module.exports = {Circle};