const add = (a: number, b: number): number => {
  // you have to have a return value!
  return a + b;
};
// typescript will return the correct type value, 
//but it doesn't care about the logic inside of the function


const subtract = (a: number, b: number) => {
  a-b; 
};
// typescript inferes that since we're not returning anything it's void
// we made a mistake, but typescript didn't tell us we did

function divide(a: number, b: number): number {
  return a / b;
};

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};
// having void as a type says it's not going to return anything as a value

const throwError = (message: string): never => {
  throw new Error(message);
};
// we will never return anything. 
// instead we leave the function early after throwing an error

const commonThrowError= (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};
//annotate to what you would return if no error

const forecast = {
  date: new Date(),
  weather: 'sunny'
}

//ES2015
//const logWeather = ({ date, weather }) => {
  //console.log(date);
  //console.log(weather);
//};

const logWeather = ({ date, weather }: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);