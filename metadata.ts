import 'reflect-metadata';
//reflect-metadata adds Reflect to the global scope so no need to write it out

const flower = {
  color: 'violet',
};

Reflect.defineMetadata('note', 'good morning', flower);
Reflect.defineMetadata('petals', 5, flower);

//should not see any mention of the note printed out
console.log(flower);

//how to retrieve metadata
const note = Reflect.getMetadata('note', flower);
console.log(note);

const petals = Reflect.getMetadata('petals', flower);
console.log(petals);
