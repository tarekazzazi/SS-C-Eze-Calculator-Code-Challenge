$(onReady);

let setOperator;
let input;

function onReady() {
  console.log("Jquery loaded");
  $("#plus").on("click", sendDoAddition);
  $("#clear").on("click", clearInputs);
  $();
}

function clearInputs(event) {
  event.preventDefault();
  input;
}

function sendDoAddition(event) {
  //  Set Operator to addition
  event.preventDefault();
  setOperator = "+";
  console.log(setOperator);
  DoMath();
}

function DoMath() {
  switch (setOperator) {
    case "+":
      // Checks if a value is entered an sets input to that val
      // Then grabs the next input entered and does the operation either addition, Multiply, Divide or Subtract
      if (input === undefined) {
        input = Number($("#input1").val());
        $("#input1").val("");
      } else {
        input = Number($("#input1").val()) + input;
        $("#input1").val("");
      }
      break;
    case "-":
      if (input === undefined) {
        input = Number($("#input1").val());
        $("#input1").val("");
      } else {
        input = Number($("#input1").val()) - input;
        $("#input1").val("");
      }
      break;
    case "*":
      if (input === undefined) {
        input = Number($("#input1").val());
        $("#input1").val("");
      } else {
        input = Number($("#input1").val()) * input;
        $("#input1").val("");
      }
      break;
    default:
      console.log("oh no I didnt get the operator");
      break;
  }
}
