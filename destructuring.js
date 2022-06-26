// JavaScript provides a syntax that allows us to unpack values from arrays and objects in to distinct variables. This is known as destructuring.


//ARRAY DESTRUCTURING
const names = ["Fred", "Kate", "Cindy", "Ricky", "Keith"];
console.log(names);
// run the code in the terminal using: node destructuring.js

// accessing the names by their index position:
// const fred = names[0];
// const kate = names[1];
// console.log(kate);

// alternative way using the destructuring syntax - array destructuring is done by position in the array:
// const [fred, kate] = names;
// console.log(kate);

// skipping some values:
// const [fred, kate, , ricky] = names;
// console.log(ricky);

//combining this syntax with the spread operator ... to assign the remaining values to a new array variable called remainigNames:
const [fred, kate, ...remainingNames] = names;
console.log(kate);
console.log(remainingNames);


//OBJECT DESTRUCTURING
// object destructuring is done by property name

// accessing the values without destructuring:
// const person = {
//     name: "Joni",
//     age: 76
//   }
//   const name = person.name;
//   const age = person["age"];
  
//   console.log(name);
//   console.log(age);

// to access these values using destructuring - the variable names need to match the name of the property:

const person = {
    name: "Joni",
    age: 76
  }
  const { name, age } = person;
  
  console.log(name);
  console.log(age);

  
//   Object destructuring allows us to specifiy exactly what properties of an object we need access to. We can use it for:

// objects we declare inline
// objects that get returned from functions
// objects we import (from e.g. npm packages).
// We will use object destructuring extensively in React. In particular, we will use it:

// to specify exactly what properties of a component's props object we are interested in
// to specify exactly what named exports from the React package to import for our different components.