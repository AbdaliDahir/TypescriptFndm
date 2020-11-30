let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

// null
let nothing: null = null;
// Undefined
let undef: undefined = undefined;

// built in Objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let Numbers: number[] = [1, 2, 3, 4];


// Classes
class Car {

}
let car: Car = new Car();

// Object Literal
let point: {x:number; y:number} = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

/**
 * ? When to Use Annotations
 * * 1/ Function that returns the 'any' type
 */
const json = '{"x": 10, "y": 20}';
const coordinations: {x:number; y:number} = JSON.parse(json);
console.log(coordinations); // {x:10, y:20}

/**
 * ? When to Use Annotations
 * * 2/ When we Declare a variable on one line and initializate it later
 */

let colorsArray: string[] = ['red', 'green', 'blue'];
// let currentColor = false; //maybe more better
let currentColor: boolean;

for (let i = 0; i< colorsArray.length; i++) {
  if(colorsArray[i] === 'blue') {
    currentColor = true;
  }
}


/**
 * ? When to Use Annotations
 * * 2/ Variable whose type cannot be inferred correctly: multi type for some var (boolean, NUmber)
 */
const ArrayNumbers = [-20, -2, 2];
let numberAboveZero: boolean | number = false;

for (let i = 0; i< ArrayNumbers.length; i++) {
  if(ArrayNumbers[i] > 0) {
    numberAboveZero = ArrayNumbers[i];
  }
}