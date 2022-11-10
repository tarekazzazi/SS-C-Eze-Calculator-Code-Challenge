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

let Additon = 0;
// Eventually move this to server side
function DoMath() {
  console.log("Operator is", setOperator);
  switch (setOperator) {
    case "+":
      Additon = Number(Additon) + Number($("#first-input").val());
      console.log(Additon);
      break;
    default:
      console.log("oh no I didnt get the operator");
      break;
  }
}
