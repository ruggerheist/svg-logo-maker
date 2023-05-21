const { Shape } = require('./shape');


class Square extends Shape {
    render(){
        return `<rect width="100%" height="100%" fill='${this.color}' />${this.text}`
    }
};


module.exports = {Square};


