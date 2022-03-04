const Shape = require("./shape.js");


class Circle extends Shape{
    constructor(color){
        super(color);
    }
    calculateArea(num){
        return num*num;
    };
}

module.exports = Circle;

let c1 = new Circle();
console.log(c1.calculateArea(5));

console.log(c1.color);


//module.exports = Circle; =>     // This is what contains what you want to export out of this module (here we are exporting Circle class).
//By default a module is encapsulated and anything you want to take out of the module and access in another module or file you will have to conciously tell node.js that you want to do this.
//(Hey! node.js, i want to export these things out of this module)