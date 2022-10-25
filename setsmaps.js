// Sets - manage unique values
// const ids = new Set(['hi', 2, 3]);
// ids.add(2);
// ids.delete('hi');
// for (const entry of ids.entries()) {
//     console.log(entry[0]);
// }

// let person = { name: 'Max' };
// const persons = new WeakSet();
// persons.add(person);

// //... some operations
// person = null;

// console.log(persons);

// Maps
// const person1 = { name: 'Max' };
// const person2 = { name: 'Manuel' };

// const personData = new Map([
//     [person1, [{ date: 'yesterday', price: 10 }]]

// ]);
// personData.set(person2, [{ date: 'two weaks ago', price: 100 }]);
// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//     console.log(key, value);
// }

// for (const key of personData.keys()) {
//     console.log(key);
// }

// for (const value of personData.values()) {
//     console.log(value);
// }

let person = { name: 'Max' };
const persons = new WeakSet();
persons.add(person);

console.log(persons);

const personData = new Map();
personData.set(person, 'Extra info!');
person = null;

console.log(personData);