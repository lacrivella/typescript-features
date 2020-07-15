# typescript-features

examples of different types in typescript and why we use them

## What is a Type

**Type** is an easy way to refer to the different properties and functions that a value has.

**Type annotations**: code we add to tell Typescript what type of value a variable will refer to. Basically we, the developers, tell Typescript the type

**Type inferenece**: Typescript trie to figure out what type of value a variable refers to. Typescript guesses the type. This is what is used most often. This only works when we declare our variable and initializ it on the same line.

**any (type)**:

- a type, just as 'string' or 'boolean' are
- means TS has no idea what this is and can't check for correct property references
- avoid variables with 'any' at all cost

## Functions

**type annotations for functions**: code we add to tell Typescript what type of arguments a function will recieve and what type of values it will return.

**type inference for functions**: Typescript tries to figure out what type of value a function will return.

## Arrays

**arrays**: where each element is some consistent type of value

_when do we use typed arrays?_
Any time we need to represent a collection of records with some arbitrary sort order.

## Tuple

**tuple**: array like structure where each element represents some property of a record.

Tuples are rare. It's better to use an object. That way, a programmer can see what the key:value pairs are. WIth a tuple you just get the value, so it becomes difficult to decipher what that value represents.

## Decorators

**decorators on a property, method, accessor**
- first argument is the prototype of the object
- second argument is the key of the property/method/accessor on the object
- third argument is the property descriptor
- decorators are applied when the code for this class is ran (*not when an instance is created*)
