class Vehicle {
  // color: string = 'black';

  constructor(public color :string) {
    // this.color = color;
  }

  drive(): void {
    console.log("test");
  }

  protected honk(): void {
    console.log("ltirotre");
  }
}

class MyCar extends Vehicle {
  constructor(public wheels: number, color: string) {
    // super('green');
    super(color);
  }
  drive(): void {
    console.log("test car");
  }

  process(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
const vehicle = new Vehicle('blue');
console.log(vehicle.color);


const mycar = new MyCar(20, 'green');
mycar.process();