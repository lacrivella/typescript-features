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
