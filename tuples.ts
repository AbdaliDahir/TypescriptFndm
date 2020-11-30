const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

//type alias
type Drink = [string, boolean, number] ;

const cola: Drink = ['brown', true, 40];

cola[1] = 20; // type 'number' is not assignable to type boolean