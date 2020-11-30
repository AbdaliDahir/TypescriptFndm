const cars = ['toyota', 'ford', 'bmw'];
const dates = [new Date(), new Date()];

// 2D
const carsModel: string [][] = [];

/*
* * 1 - Help with inference when extracting values.
* * 2 - Prevent incompatible vallues.
* * 3 - Help with 'map' ...  .
* * 4 - Flexibility .
*/

// 1
const newCar = cars[0];
const myCar = cars.pop();

// 2
cars.push(12); //type prblm

// 3
cars.map((car: string): string => {
  return car; // car."options"
})

//4
const typeDate: (Date | string)[] = [new Date(), '10-20-2020'];

typeDate.push('20-56-5986');
typeDate.push(new Date());
typeDate.push(235); // type prblm

