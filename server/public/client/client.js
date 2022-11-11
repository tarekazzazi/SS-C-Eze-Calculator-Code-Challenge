$(onReady);

let setOperator;

function onReady() {
  console.log("Jquery loaded");
  $("#Add").on("click", DoAddition);
}

function DoAddition(event) {
  event.preventDefault();
  setOperator = "+";
  console.log("DOING MATH");
  DoMath();
}

// Eventually move this to server side
let newNumber = 0;
let Inputval = 0;

function DoMath() {
  switch (setOperator) {
    case "+":
      // Variables
      newNumber = newNumber + Inputval;
      Inputval = Number($("#first-input").val());

      // way of displaying results
      const res = newNumber + Inputval;
      console.log(`${newNumber} + ${Inputval} = ${res}`);

      //  Clears Inputs
      $("#first-input").val("");
      break;
    default:
      console.log("oh no I didnt get the operator");
      break;
  }
}
