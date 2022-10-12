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