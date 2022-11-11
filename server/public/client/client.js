$(onReady);

let setOperator;
let newNumber = 0;
let Inputval = 0;

function onReady() {
  console.log("Jquery loaded");
  $("#plus").on("click", Addition);
  $("#equal").on("click", getAnswer);
  $(":button").on("click", display);
}
const array = [];

function display() {
  // Not the most ideal way of displaying calc results
  // Working with it for now
  array.push($(this).val());
  console.log(array);
  $("#input").val(array.join(""));
}

function Addition(event) {
  event.preventDefault();
  setOperator = "+";
}

function Subtraction(event) {
  event.preventDefault();
  setOperator = "-";
}
function getAnswer() {
  console.log(".....getting answer");
}
// Eventually move this to server side
// let newNumber = 0;
// let Inputval = 0;

function DoMath() {
  switch (setOperator) {
    case "+":
      Add();
      break;
    case "-":
      Subtract();
      break;
    default:
      console.log("oh no I didnt get the operator");
      break;
  }
}

function Add() {
  // CURRENTLY BROKEN
  // Variables
  newNumber = newNumber + Inputval;
  Inputval = Number($("#input").val());

  // way of displaying results
  const res = newNumber + Inputval;
  console.log(`${newNumber} + ${Number(Inputval)} = ${res}`);

  //  Clears Inputs
  // $("#input").val("");
}

function Subtract() {
  // CURRENTLY BROKEN
  // Variables
  newNumber = newNumber - Inputval;
  Inputval = Number($("#input").val());
  // way of displaying results
  const res = newNumber - Inputval;
  console.log(`${newNumber} - ${Number(Inputval)} = ${res}`);

  //  Clears Inputs
  // $("#input").val("");
}
