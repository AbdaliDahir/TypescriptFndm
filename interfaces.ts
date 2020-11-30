interface VehicleInterface {
  name: string; 
  year: number; 
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `My Name is: ${this.name}`
  }
};

const oldProfile = {
  name: 'alex',
  age: 20,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const printVehicle = (vehicle: VehicleInterface): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
  console.log(`Broken? ${vehicle.summary()}`);
}

const printSummary = (item: Reportable): void => {
  console.log(`Broken? ${item.summary()}`);
}


printVehicle(oldCivic);

printSummary(oldCivic);
printSummary(oldProfile);
