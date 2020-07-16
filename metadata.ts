import 'reflect-metadata';

@printMetadata
class Flower {
  color: string = 'violet';

  @markFunction('9AM')
  sunlight(): void {
    console.log('grow!');
  }
}

// factory decorator
function markFunction(dayInfo: string) {
  return function (target: Flower, key: string) {
    Reflect.defineMetadata('time', dayInfo, target, key);
  };
}

function printMetadata(target: typeof Flower) {
  for (let key in target.prototype) {
    const time = Reflect.getMetadata('time', target.prototype, key);
    console.log(time);
  }
}

//reflect-metadata adds Reflect to the global scope so no need to write it out

// const flower = {
//   color: 'violet',
// };

// Reflect.defineMetadata('note', 'good morning', flower);
// Reflect.defineMetadata('petals', 5, flower);

// //should not see any mention of the note printed out
// console.log(flower);

// //how to retrieve metadata
// const note = Reflect.getMetadata('note', flower);
// console.log(note);

// const petals = Reflect.getMetadata('petals', flower);
// console.log(petals);

//adds metadata to a property
// Reflect.defineMetadata('note', 'also the name', flower, 'color');

// const propNote = Reflect.getMetadata('note', flower, 'color');
// console.log(propNote);
