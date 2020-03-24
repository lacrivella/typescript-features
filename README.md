# typescript-features
examples of different types in typescript and why we use them

##What is a Type
**Type** is an easy way to refer to the different properties and functions that a value has.

**Type annotations**: code we add to tell Typescript what type of value a variable will refer to. Basically we, the developers, tell Typescript the type

**Type inferenece**: Typescript trie to figure out what type of value a variable refers to. Typescript guesses the type. This is what is used most often. This only works when we declare our variable and initializ it on the same line.

**any (type)**:
  - a type, just as 'string' or 'boolean' are
  - means TS has no idea what this is and can't check for correct property references
  - avoid variables with 'any' at all cost