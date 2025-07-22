"use strict";

// NOTE: arrow function that takes a number and adds 7 to it
// const add7 = (number) => number + 7;
// console.log(add7(7));

// NOTE: creating a function declaration that takes 2 numbers and multiplies them
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// console.log(multiply(5, 5));

// NOTE: creating a function expression that takes a string and returns the first
// letter of that string as uppercase no matter what
// const capitalize = function (str) {
//   let formatStr = str.toLowerCase();
//   return formatStr.charAt(0).toUpperCase() + formatStr.slice(1);
// };

// console.log(capitalize("marcui"));
// console.log(capitalize("JAKE"));
// console.log(capitalize("IsLa"));

// NOTE: creating an arrow function that takes a string and returns the last letter
// of that string.
// const lastLetter = (str) => str.charAt(str.length - 1);
// console.log(lastLetter("Toyota"));
// console.log(lastLetter("chamomile"));
// console.log(lastLetter("serendipity"));

// NOTE: fizzbuzz game

// NOTE: wrapping our prompt in in a parseInt() function so that a number is returned from the users input
// const answer = parseInt(
//   prompt("Please enter the number you would like to fizzbuzz up to: "),
// );

// NOTE: fizzbuzz game, if a number is divisible by 3 then we return 'fizz',
// if a number is divisible by 5 we return 'buzz', if a number is divisible
// by 3 && 5 we return 'fizzbuzz'

// NOTE: for loop to iterate up to the number specified from prompt
// for (let i = 1; i <= answer; i++) {
// NOTE: putting this if condition first before the others so that we check if i is divisible by 3 & 5
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// NOTE: using the modulo operator to print numbers 2 to 10 in our for loop below,
// we check for even numbers by using 'x % 2 === 0' so that we specify no remainder
// when divided by 2 ie. even number
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// NOTE: Using a while loop to alert up to number 3
// let i = 0;
// while (i <= 3) {
//   alert(`number ${i++}!`);
// }

// NOTE: creating a do while loop that prompts when the answer is less
// than 100 and checks if answer is falsy ie. null or an empty string
// will make it falsy. If answer is null then answer <= 100 is true,
// so without the 2nd check the loop wouldnt stop if the user clicks CANCEL,
// since both checks are required
// let answer;
// do {
//   answer = prompt("Enter a number greater than 100: ");
// } while (answer <= 100 && answer);

// NOTE: output prime numbers

// NOTE:
// - for each i in the interval
// - check if i has a divisor from 1..i
// - if yes, the value is not a prime
// - if no the value is a prime, show it

// let range = 10;

// NOTE: the outer for loop specifies for each 'i'
// for (let i = 2; i <= range; i++) {
//   // NOTE: the inner for loop looks for a divisor
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue;
//   }
//   console.log(i);
// }

// TODO: do 5 array operations

// NOTE: create an array styles with two strings
// const styles = ["Jazz", "Blues"];

// NOTE: appending rock-n-roll to the end
// styles.push("Rock-n-Roll");
// console.log(styles);

// NOTE: replace the value in the middle, finding the middle value should work for any array with odd length
// styles[Math.floor(styles.length - 1) / 2] = "classics";
// console.log(styles);

// NOTE: take the first value off then show it
// console.log(styles.shift());

// NOTE: prepend two strings to the array
// styles.unshift("Rap", "Reggae");
// console.log(styles);

// TODO: slice example

// const arr = ["a", "b", "c", "d"];
//
// const strArr = ["Marcui", "loves", "Jake", "so", "much"];
// strArr.splice(1, 2);
// console.log(strArr);

// const newArr = arr.slice(0, 2);
// console.log(newArr);

// arr.splice(0, 1, "1", "2");
// console.log(arr);

// const arrNum = [1, 24, 56, 78, -5, 8, 3];

// NOTE: when sorting numbers from lowest to highest,
// we really only need to return a positive number to
// say greater, and a negative number to say less
// the algorithm below returns the numbers sorted from
// lowest to highest left -> right
// arrNum.sort((a, b) => a - b);
// console.log(arrNum);
// arrNum.slice();

// NOTE: if we switch the order of a and b we can now log
// to the console the integers from highest to lowest
// arrNum.sort((a, b) => b - a);
// console.log(arrNum);

// const arr = [1, 2, 3, 4];
//
// const newArr = arr.map((num) => {
//   if (num % 2 === 0) {
//     return num * 3;
//   }
// });
// console.log(newArr);

// TODO: create a function that takes in an array, and for every even number, triple it. Then sum all of the even numbers
// using map, filter, reduce

// NOTE: test array of numbers
// const numArr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// NOTE: creating a function that returns the sum of tripled even numbers based on the array given
// const sumOfTripledEvens = function (arr) {
//   return arr // NOTE: explicitly returning outcome of all of the methods we use on the given array
//     .filter((item) => item % 2 === 0) // NOTE: filtering the array so we only return an array of even numbers
//     .map((item) => item * 3) // NOTE: multiplying every even number by 3 then returning that array
//     .reduce((acc, curr) => (acc += curr)); // NOTE: reducing our array to the sum of the array entire array
// };

// console.log(sumOfTripledEvens(numArr));

// TODO: Translate border-left-width to borderLeftWidth
// - removes all dashes
// - each word after dash becomes uppercase

// const camelizeStr = function (str) {
// return str // NOTE: explicitly returning our string
// .split("-") // NOTE: splitting our string by dashes
// .map(
// (str, index) =>
// NOTE: using a map function that takes the currentItem, and current index as parameters
//         index === 0 ? str.toLowerCase() : str[0].toUpperCase() + str.slice(1), // NOTE: if the current index is 0 (the first string) then just return the string as lowercase ELSE convert the rest of the strings first letters to uppercase [0] and then add back the rest of the string (sliced from the '1' the second letter and onwards)
//     )
//     .join(""); // NOTE: join the array by an empty string (no spaces)
// };

// console.log(camelizeStr("border-left-width"));
// console.log(camelizeStr("list-style-image"));
// console.log(camelizeStr("-webkit-transition"));

// TODO: Filter range
// - write a function that gets an array
// - looks for elements with values higher or equal to a
// - and lower or equal to b
// - return a result as an array
// - the function should not modify the original array

// const testArr = [5, 3, 8, 1];

// NOTE: creating an function that takes an array, a & b as arguements
// const filterRange = function (arr, a, b) {
// NOTE: returning a filtered array than only includes
// numbers that are greater than or equal to 'a' AND numbers
// that are less than or equal to 'b'
// return arr.filter((num) => num >= a && num <= b);
// };

// console.log(testArr);
// console.log(filterRange(testArr, 1, 7)); // NOTE: return numbers between 1 & 7

// TODO: Filter range 'in place'
// - write  function that gets an array
// - removes from it all values except those
// that are between a and b
// - the function should only modify the array.

// NOTE: creating a function that takes an array, a & b as arguements
// const filterRangeInPlace = function (arr, a, b) {
//   // NOTE: for loop to iterate over the array
//   for (let i = 0; i < arr.length; i++) {
//     // NOTE: if condition to specify if the current index is less than a OR
//     // if the current condition is greater than b
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1); // NOTE: remove from the current array index 'i' and then specifying the delete count '1' to ensure that only one element is removed per operation
//       i--; // NOTE: specifying i-- to prevent skipping the next element when removing items during forward iteration.
//     }
//   }
//   return arr; // NOTE: explicitly returning the array
// };

// console.log(filterRangeInPlace(testArr, 1, 4));

// TODO: Sort array in decreasing order

// let testArr = [5, 2, 1, -10, 8];

// NOTE: creating a sorting function that takes an array as an arguement
// const sortFn = function (arr) {
// NOTE: using the sort method to specify if b - a (returns decreasing order)
// this is because we return a negative number, if we wanted the opposite we do a - b which returns a postive number
//   return arr.sort((a, b) => b - a);
// };

// alert(sortFn(testArr));

// TODO: Copy and sort array
// - create a function that takes an array of strings
// - return a sorted copy of it
// - keep the original array unmodified

// let arr = ["HTML", "JavaScript", "CSS"];

// NOTE: creating an arrow function that takes an arr as an arguement
// const copySorted = (arr) => {
//   return arr.toSorted(); // NOTE: returning a sorted copy of the array
// };

// console.log(copySorted(arr));

// TODO: Shuffle an array
// - write a function that takes an array
// - shuffles the elements randomly
// - multple runs lead to different orders of the elements

// let arr = [1, 2, 3];

// NOTE: creating a function that takes an array as an arguement
// const shuffle = (arr) => {
//   // NOTE: using the sort method and passing in Math.random function
//   // to produce a 50% chance that a is place before b or a is placed after b
//   return arr.sort(() => Math.random() - 0.5);
// };
// console.log(shuffle(arr));

// TODO: Filter unique array members
// - let arr be an array
// - create a function unique(arr) that should return an array
// with unique items of arr

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// NOTE: creating a function that takes an array as an arguement
// const unique = (arr) => new Set(arr); // NOTE: to get the unique values we can pass the array through a set
// console.log(strings);
//
// console.log(unique(strings));

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";
container.appendChild(content);

const redText = document.createElement("p");
redText.classList.add("red-Text");
redText.textContent = `Hey I'm red!`;
redText.style.color = "red";
container.appendChild(redText, content);

const blueText = document.createElement("h3");
blueText.classList.add("blue-text");
blueText.textContent = `I'm a blue h3`;
blueText.style.color = "blue";
container.appendChild(blueText, redText);

const bigDiv = document.createElement("div");
bigDiv.classList.add("black-pink-div");
bigDiv.style.cssText = "border: solid; background: pink;";
container.appendChild(bigDiv, container);

const childHeader = document.createElement("h1");
childHeader.classList.add("child-header-div");
childHeader.textContent = `I'm in a div`;
bigDiv.appendChild(childHeader, bigDiv);

const paraString = document.createElement("p");
paraString.classList.add("paragraph-string");
paraString.textContent = "ME TOO!";
bigDiv.appendChild(paraString, childHeader);

// NOTE: selecting the '#btn' element on our HTML page and then adding our
// onclick property to it that takes a function reference that alerts the
// string 'Hello World' on the webpage
const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// NOTE: the most flexible and powerful way is done below. we assign our
// DOM element a variable name similar to what we did above, but instead
// add an event listener that waits for a 'click' then we pass in our function
// that alerts the string 'Hello World'
// const bestBtn = document.querySelector(".preferred-button");
// bestBtn.addEventListener("click", () => {
//   alert("Hello World");
// });

// const extraBtn = document.querySelector(".extra-button");

// const alertFunction = () => alert("Preferred Way");

// NOTE: adding onclick property to our button
// extraBtn.onclick = alertFunction;

// NOTE: adding an event listener on our extraBtn to wait for a click,
// then passing in our alertFunction that alerts 'Hello World' when clicked
// extraBtn.addEventListener("click", alertFunction);

// NOTE: when we pass in 'e' as a arguement to addEventListener, we call this
// a callback function. A callback is simply a function that is passed into
// another function as an arguement
// btn.addEventListener("click", function (e) {
//   console.log(e);
// });

// NOTE: The e parameter in our callback function contains an object
// that references the 'event' itself. Here we are logging to the console
// the target which is the element that triggered the event
// btn.addEventListener("click", function (e) {
//   console.log(e.target);
// });

// NOTE: taking our event as an arguement and then changing its background
// color to blue when clicked
// btn.addEventListener("click", function (e) {
//   e.target.style.background = "blue";
// });
