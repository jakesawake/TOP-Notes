"use strict";

// selecting our DOM elements and storing them in variables
const runningList = document.querySelector("ul");
const inputField = document.querySelector("input");
const btn = document.querySelector("button");

// creating a function that waits for a click
btn.addEventListener("click", () => {
  // storing the value of whatever we put in the inputField in our currVal variable
  let currVal = inputField.value;
  // NOTE: emptying string after entering
  inputField.value = "";

  // creating new DOM elements
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  // appending the newly created DOM elements to the new list we created
  listItem.appendChild(span);
  listItem.appendChild(deleteBtn);

  // changing the text content of our span element to the currVal
  span.textContent = currVal;
  // making our deletebutton say 'Delete'
  deleteBtn.textContent = "Delete";
  // appending the entire list to our unordered list runningList
  runningList.appendChild(listItem);
  // creating a function for deleteBtn that removes the child (listItem)
  // of runningList when clicked
  deleteBtn.addEventListener("click", () => {
    runningList.removeChild(listItem);
  });
  // making inputField the focus after adding an entry to shopping list
  inputField.focus();
});
