// const numbers = [1, 2, 3];
// console.log(numbers);

// const numbers1 = [1]; // 1
// console.log(numbers1);

// const moreNumbers0 = new Array(); // []
// console.log(moreNumbers0);

// const moreNumbers1 = new Array('Hi', 'Welcome!');
// console.log(moreNumbers1);

// const moreNumbers2 = new Array(5); // (5) [empty × 5]
// console.log(moreNumbers2);

// const yetMoreNumbers = Array.of(1) // 1
// console.log(yetMoreNumbers);

// // const moreNumbers3 = Array.from(1, 2); //error
// // console.log(moreNumbers3);

// const moreNumbers4 = Array.from([1, 2]);
// console.log(moreNumbers4);

// const moreNumbers5 = Array.from('Hi!'); //['H', 'i', '!']
// console.log(moreNumbers5);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading'); //add el ih the end of the array
// hobbies.unshift('Coding') //add el in the beggining of the array
// hobbies.pop(); // remove the last el of the array
// hobbies.shift(); // remove first el of the array
// console.log(hobbies);

// //splice()

// hobbies[1] = 'Coding'; //replace element
// // hobbies[5] = 'Sewing'; //['Sports', 'Coding', empty × 3, 'Sewing'] rarely used 
// console.log(hobbies)

// hobbies.splice(1, 0, 'Good Food'); // negative indexes are allowed 
// console.log(hobbies);

// //slice

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(0, 2);
// testResults.push(5.91);
// console.log(storedResults, testResults);

// // concat()
// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.concat([3.99, 2])
// testResults.push(5.91);
// console.log(storedResults, testResults);

// indexOf(), lastIndexOf, includes
// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults.concat([3.99, 2])
// testResults.push(5.91);
// console.log(storedResults, testResults);
// // console.log(storedResults.indexOf(1.5));
// console.log(testResults.lastIndexOf(1.5));
// console.log(testResults.includes(104));

// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log(personData.indexOf({ name: 'Manuel' }));

// find() and findIndex()
// const manuel = personData.find((person, idx, persons) => {
//     return person.name === 'Manuel';

// });

// manuel.name = 'Anna';
// console.log(manuel);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === 'Max';
// });
// console.log(maxIndex);

// forEach() 
// const prices = [10.99, 5.99, 3.99, 6.59]
// const tax = 0.19;
// const taxAdjustedPrices = [];
// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }
// prices.forEach((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     taxAdjustedPrices.push(priceObj)
// });
// console.log(taxAdjustedPrices)

// map()
// const prices = [10.99, 5.99, 3.99, 6.59]
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     return priceObj;
// });
// console.log(prices, taxAdjustedPrices)

// sort()ing and reverse()ing
// const prices = [10.99, 5.99, 3.99, 6.59]
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     return priceObj;
// });

// const sortedPrices = prices.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedPrices.reverse())

// filter()
// const prices = [10.99, 5.99, 3.99, 6.59]
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     return priceObj;
// });

// const sortedPrices = prices.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedPrices);
// const filteredArray = prices.filter((price, idx, prices) => { // cb const filteredArray = prices.filter(price => price > 6);
//     return price > 6
// });
// console.log(filteredArray);

// reduce()
// const sum = 0;
// prices.forEach((price) => {
//     sum += price 
// });
// console.log(sum);
// const prices = [10.99, 5.99, 3.99, 6.59]
// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//     return prevValue + curValue;
// }, 0);

// console.log(sum)

// //  split() and join()
// const data = 'new york;10.99;2000';
// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ['Max', 'Schwartz'];
// const name = nameFragments.join(' ');
// console.log(name);

// // Spread(...)
// const copiedNameFragments = [...nameFragments]
// nameFragments.push('Mr');
// console.log(nameFragments, copiedNameFragments);

// const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }];
// const copiedPerson = [...persons.map(person => ({
//     name: person.name,
//     age: person.age
// }))];

// persons.push({ name: 'Anna', age: 29 });
// persons[0].age = 31;
// console.log(persons, copiedPerson);

// const nameData = ['Max', 'Schwartz', 'Mr', 30];
// // const firstName = nameData[0];
// // const lastName = nameData[1];

// const [firstName, lastName, ...otherInformation] = nameData;
// console.log(firstName, lastName, ...otherInformation);