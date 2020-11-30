const add = (a: number, b: number): number => {
  return a + b;
}

function devide(a: number, b:number): number {
  return a / b;
}

const multiplay = function(a: number, b:number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);

  // return null;
  // return undefined;
}

const throwError = (message: string): never => {
  throw new Error(message);
}

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
}
const logWeather = ({date, weather}: {date: Date; weather: string}): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todayWeather);