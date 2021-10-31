const buttonValue = document.querySelectorAll("button");
const screenValue = document.querySelector("#number");
function refreshCalculator() {
  screenValue.value = "0";
}
refreshCalculator();
buttonValue.forEach((element) => {
  element.addEventListener("click", (e) => {
    var buttonText = e.target.innerText;
    if (buttonText === "C") {
      refreshCalculator();
    } else if (buttonText === ".") {
      screenValue.value += buttonText;
    } else if (buttonText === "+") {
      if (screenValue.value != "0") {
        screenValue.value += buttonText;
      }
    } else if (buttonText === "-") {
      if (screenValue.value != "0") {
        screenValue.value += buttonText;
      }
    } else if (buttonText === "*") {
      if (screenValue.value != "0") {
        screenValue.value += buttonText;
      }
    } else if (buttonText === "/") {
      if (screenValue.value != "0") {
        screenValue.value += buttonText;
      }
    } else if (buttonText >= "0" && buttonText <= 9) {
      if (screenValue.value === "0") {
        screenValue.value = buttonText;
      } else {
        screenValue.value += buttonText;
      }
    } else if (buttonText === "=") {
      screenValue.value = eval(screenValue.value);
    }
    console.log(buttonText);
    console.log(screenValue.value);
  });
});
