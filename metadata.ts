import 'reflect-metadata';
//reflect-metadata adds Reflect to the global scope so no need to write it out

const flower = {
  color: 'violet',
};

Reflect.defineMetadata('note', 'good morning', flower);

//should not see any mention of the note printed out
console.log(flower);
