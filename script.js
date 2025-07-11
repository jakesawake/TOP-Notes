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

const arr = [1, 2, 3, 4];

const newArr = arr.map((num) => {
  if (num % 2 === 0) {
    return num * 3;
  }
});
console.log(newArr);
