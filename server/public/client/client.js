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
// Val1 Operator Val2
// Check operator
// Check parenthesis on equal button pressed
// Do the first one
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
    // sets the value of the input but only uses it for displaying purposes
    $(".inputVal").val(Val1 + Operator + Val2);
  }

  console.log(Val1, Operator, Val2);
}

function clearInputs(event) {
  Val1 = undefined;
  Val2 = undefined;
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
    default:
      break;
  }
}

function getResults(event) {}

// Core Operations
// Multiply
// Divide
// Subtract
// Add
function DoAdditon() {
  console.log("Doing Addition");
  Val1 = Number(Val1) + Number(Val2);
  $(".inputVal").val(Val1);

  // IDK how but this can be condesed I know it can
  Operator = undefined;
  Val2 = undefined;
  console.log(Val1);
}

function DoMultiplycation() {
  Val1 = Number(Val1) * Number(Val2);
  $(".inputVal").val(Val1);

  // I really don't wanna repeat this
  Operator = undefined;
  Val2 = undefined;
  console.log(Val1);
}

function DoDivison() {
  Val1 = Number(Val1) / Number(Val2);
  $(".inputVal").val(Val1);

  // I really really don't wanna repeat this
  Operator = undefined;
  Val2 = undefined;
  console.log(Val1);
}

function DoSubtraction() {
  Val1 = Number(Val1) - Number(Val2);
  $(".inputVal").val(Val1);

  // I really really really don't wanna repeat this
  Operator = undefined;
  Val2 = undefined;
  console.log(Val1);
}
// Sub Functionallies - Somthing I think can be done with the Core Operations
// Exponent
// Parentheses
