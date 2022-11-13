$(onReady);

let setOperator;
let input;

function onReady() {
  console.log("Jquery loaded");
  $("#plus").on("click", sendDoAddition);
  $("#minus").on("click", sendDoSubtraction);
  $("#times").on("click", sendDoMultiplycation);
  $("#divide").on("click", sendDoDivison);
  $("#clear").on("click", clearInputs);
  $("#submitBtn").on("click", getResults);
}

function clearInputs(event) {
  event.preventDefault();
  // resets input value so it starts at the first num entered not the answer from =
  input = undefined;
  Number($("#input1").val("0"));
}

function getResults(event) {
  event.preventDefault();
  DoMath();
  Number($("#input1").val(input));
}

function sendDoAddition(event) {
  //  Set Operator to addition
  event.preventDefault();
  setOperator = "+";
  console.log(setOperator);
  // Checks if a number is left over from pressing equals and emptys the value so it dosent do the operation by itself
  if (input !== undefined) {
    $("#input1").val("");
  }
  // actually does the math
  DoMath();
}

function sendDoSubtraction(event) {
  //  Set Operator to subtraction
  event.preventDefault();
  setOperator = "-";
  console.log(setOperator);
  if (input !== undefined) {
    $("#input1").val("");
  }
  DoMath();
}

function sendDoMultiplycation(event) {
  //  Set Operator to Multiplycation
  event.preventDefault();
  setOperator = "*";
  console.log(setOperator);
  if (input !== undefined) {
    $("#input1").val("");
  }
  DoMath();
}

function sendDoDivison(event) {
  //  Set Operator to Divison
  event.preventDefault();
  setOperator = "/";
  console.log(setOperator);
  if (input !== undefined) {
    $("#input1").val("");
  }
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
        console.log(input);
      } else {
        input = input + Number($("#input1").val());
        console.log(input);
      }
      break;
    case "-":
      if (input === undefined) {
        input = Number($("#input1").val());
        $("#input1").val("");
        console.log(input);
      } else {
        input = input - Number($("#input1").val());
        console.log(input);
      }
      break;
    case "*":
      if (input === undefined) {
        input = Number($("#input1").val());
        $("#input1").val("");
      } else {
        input = input * Number($("#input1").val());
      }
      break;
    case "/":
      if (input === undefined) {
        input = Number($("#input1").val());
        $("#input1").val("");
      } else {
        input = input / Number($("#input1").val());
      }
      break;
    default:
      console.log("oh no I didnt get the operator");
      break;
  }
}
