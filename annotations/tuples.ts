const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// const pepsi: [string, boolean, number] = ['brown', true, 40];
// use a type alias so you don't have to rewrite for every drink variable
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const sweetTea: Drink = ['brown', false, 100];
const water: Drink = ['clear', false, 0];

