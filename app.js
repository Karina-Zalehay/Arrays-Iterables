const numbers = [1, 2, 3];
console.log(numbers);

const numbers1 = [1]; // 1
console.log(numbers1);

const moreNumbers0 = new Array(); // []
console.log(moreNumbers0);

const moreNumbers1 = new Array('Hi', 'Welcome!');
console.log(moreNumbers1);

const moreNumbers2 = new Array(5); // (5) [empty × 5]
console.log(moreNumbers2);

const yetMoreNumbers = Array.of(1) // 1
console.log(yetMoreNumbers);

// const moreNumbers3 = Array.from(1, 2); //error
// console.log(moreNumbers3);

const moreNumbers4 = Array.from([1, 2]);
console.log(moreNumbers4);

const moreNumbers5 = Array.from('Hi!'); //['H', 'i', '!']
console.log(moreNumbers5);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading'); //add el ih the end of the array
hobbies.unshift('Coding') //add el in the beggining of the array
hobbies.pop(); // remove the last el of the array
hobbies.shift(); // remove first el of the array
console.log(hobbies);

//splice()

hobbies[1] = 'Coding'; //replace element
// hobbies[5] = 'Sewing'; //['Sports', 'Coding', empty × 3, 'Sewing'] rarely used 
console.log(hobbies)

hobbies.splice(1, 0, 'Good Food'); // negative indexes are allowed 
console.log(hobbies);

//slice

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.slice(0, 2);
testResults.push(5.91);
console.log(storedResults, testResults);

// concat()
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.concat([3.99, 2])
testResults.push(5.91);
console.log(storedResults, testResults);