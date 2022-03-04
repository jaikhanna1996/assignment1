// const Circle = require("./circle.js"); //require will return what you exported(here we exported the Circle class), and we hold that value in a variable (here - Circle).

class Shape{
    constructor(color){
        this.color = "black";
    }
    drawShape(){
        console.log("drawing shape");
    }
    calculateArea(){
        console.log("calculating");
    };
}


module.exports = Shape; //exporting Shape class

