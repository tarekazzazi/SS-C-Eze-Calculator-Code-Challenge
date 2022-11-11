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
  DoMath();
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
      // Variables
      // newNumber = newNumber + Inputval;
      // Inputval = Number($("#input").val());

      // // way of displaying results
      // const res = newNumber + Inputval;
      // console.log(`${newNumber} + ${Inputval} = ${res}`);

      // //  Clears Inputs
      // $("#input").val("");
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
  // Variables
  newNumber = newNumber - Inputval;
  Inputval = Number($("#input").val());
  // way of displaying results
  const res = newNumber - Inputval;
  console.log(`${newNumber} - ${Number(Inputval)} = ${res}`);

  //  Clears Inputs
  // $("#input").val("");
}
