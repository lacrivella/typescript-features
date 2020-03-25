const animalCrossingGames = [
  'wild world',
  'new leaf',
  'pocket camp',
  'new horizons'
];
const dates = [new Date(), new Date()];

const gamesByConsole = [['ds'], ['3ds'], ['mobile'], ['switch']];

const animalCrossingConsole: string[][] = [];

// Help with inference when extracting values
const animalCrossing = animalCrossingGames[0];
const myGame = animalCrossingGames.pop();

// Prevent incompatible values
animalCrossingGames.push(1000);

// Help with 'map'
animalCrossingGames.map((animalCrossing: string): string => {
  return animalCrossing.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2020-03-20');
importantDates.push(new Date());
importantDates.push(100); // this will error
