$(onReady);
// Variables
let Val1;
let Val2;
let Operator;

function onReady() {
  $(":button").on("click", getValues);
  $("#plus").on("click", setOperator);
  $("#minus").on("click", setOperator);
  $("#times").on("click", setOperator);
  $("#divide").on("click", setOperator);
  $("#submitBtn").on("click", CheckForParenthesis);
}

function setOperator() {
  // Sets operator to the operator button that is clicked
  Operator = $(this).val();
  $(".inputVal").val(Val1 + Operator);
}

function CheckForParenthesis() {
  // temporary way of defineing parenthesis when I have not gotten there yet
  let parentheses = false;
  if (parentheses === true) {
    // If parenthisies exist do somthing
  } else {
    DoMath();
  }
}

function getValues() {
  if (Val1 === undefined) {
    // sets first val to the button pressed
    Val1 = $(this).val();
    $(".inputVal").val(Val1);
  } else if (Operator === undefined) {
    // Notifiys the user to select a operator so math can be done
    $(".inputVal").val(Val1);
  } else if (Val2 === undefined) {
    // sets second val to the button pressed
    Val2 = $(this).val();
    // sets the value of the input but only uses it for ** displaying **  purposes
    $(".inputVal").val(Val1 + Operator + Val2);
  } else if (Val1 === Operator || Operator === Val1) {
    // resets inputs if started by pressing an operator
    clearInputs();
    alert("Wrong Order try again");
  }
  console.log(Val1, Operator, Val2);
}

function clearInputs() {
  Val1 = undefined;
  Val2 = undefined;
  Operator = undefined;
}

function DoMath() {
  console.log("made it to do math");
  console.log(Val1, Val2, Operator);
  switch (Operator) {
    case "+":
      DoAdditon();
      break;
    case "-":
      DoSubtraction();
      break;
    case "/":
      DoDivison();
      break;
    case "*":
      DoMultiplycation();
      break;
    case "^":
      DoToPow();
      break;
    default:
      break;
  }
}

// Core Operations
// Multiply
// Divide
// Subtract
// Add
function DoAdditon() {
  console.log("Doing Addition");
  Val1 = Number(Val1) + Number(Val2);
  displayCurrentValue();
}

function DoMultiplycation() {
  console.log("Doing Multiplycation");
  Val1 = Number(Val1) * Number(Val2);
  displayCurrentValue();
}

function DoDivison() {
  console.log("Doing Divison");
  Val1 = Number(Val1) / Number(Val2);
  displayCurrentValue();
}

function DoSubtraction() {
  console.log("Doing Subtraction");
  Val1 = Number(Val1) - Number(Val2);
  displayCurrentValue();
}

function DoToPow() {
  console.log("Doing to the power of");
  // Does Math.pow function to get the value of the first number to the power of the second
  // Number converts the strings to numbers
  Val1 = Math.pow(Number(Val1), Number(Val2));
  displayCurrentValue();
}

function displayCurrentValue() {
  $(".inputVal").val(Val1);
  Operator = undefined;
  Val2 = undefined;
}
// Sub Functionallies - Somthing I think can be done with the Core Operations
// Exponent
// Parentheses
