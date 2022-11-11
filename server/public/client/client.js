$(onReady);

let setOperator;

function onReady() {
  console.log("Jquery loaded");
  $("#plus").on("click", Subtraction);
}

function Addition(event) {
  event.preventDefault();
  setOperator = "+";
  DoMath();
}

function Subtraction(event) {
  event.preventDefault();
  setOperator = "-";
  DoMath();
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
      // Inputval = Number($("#first-input").val());

      // // way of displaying results
      // const res = newNumber + Inputval;
      // console.log(`${newNumber} + ${Inputval} = ${res}`);

      // //  Clears Inputs
      // $("#first-input").val("");
      break;
    case "-":
      Subtract();
      break;
    default:
      console.log("oh no I didnt get the operator");
      break;
  }
}

let newNumber = 0;
let Inputval = 0;

function Add() {
  // Variables
  newNumber = newNumber + Inputval;
  Inputval = Number($("#first-input").val());
  // way of displaying results
  const res = newNumber + Inputval;
  console.log(`${newNumber} + ${Number(Inputval)} = ${res}`);

  //  Clears Inputs
  $("#first-input").val("");
}

function Subtract() {
  // Variables
  newNumber = newNumber - Inputval;
  Inputval = Number($("#first-input").val());
  // way of displaying results
  const res = newNumber - Inputval;
  console.log(`${newNumber} - ${Number(Inputval)} = ${res}`);

  //  Clears Inputs
  $("#first-input").val("");
}
