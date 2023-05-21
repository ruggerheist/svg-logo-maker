class Shape {
    constructor(data){
        this.color = data.shapeColor;
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textColor}'>${data.text}</text>`;
        }
};  

module.exports = {Shape};


