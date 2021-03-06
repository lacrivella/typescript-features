let oranges: number = 5;
let island: string = 'deserted';
let hasName: boolean = true;

//value with a name identical to it's type
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let animals: string[] = ['cat', 'dog', 'raccoon'];
let bells: number[] = [42, 10000, 350];
let truths: boolean[] = [true, true, false];

// Classes
class Villager {

}
let villager: Villager = new Villager();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y:number } = JSON.parse(json);

// 2) When we declare a variable on one line 
// and initialize on another
let friends = ['olivia', 'apollo', 'beau'];
let foundFriend: boolean;

for (let i = 0; i < friends.length; i++) {
  if (friends[i] === 'apollo') {
    foundFriend = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
