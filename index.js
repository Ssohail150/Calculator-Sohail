  let currentInput = "";
  let previousInput = "";
  let operation = null;


  function clearDisplay() {
    document.getElementById("display").textContent = "0";
    currentInput = "";
    previousInput = "";
    operation = null;
  }

  function appendToDisplay(value) {
    if (currentInput.length < 23) { // Set the desired character limit
    if (currentInput === "0" && value !== ".") {
      currentInput = "";
    }
    currentInput += value;
    document.getElementById("display").textContent = currentInput;
  }
  }

  function performOperation(operator) {
    if (operation !== null) {
      calculateResult();
    }
    previousInput = currentInput;
    currentInput = "";
    operation = operator;
  }

  function calculateResult() {
    if (operation === "+") {
      currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
    } else if (operation === "-") {
      currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
    } else if (operation === "*") {
      currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
    } else if (operation === "/") {
      currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
    }
    document.getElementById("display").textContent = currentInput;
    operation = null;
    previousInput = "";
  }

  function handleKeyPress(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
      appendToDisplay(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      performOperation(key);
    } else if (key === "=" || key === "Enter") {
      calculateResult();
    } else if (key === "Backspace" || key === "c") {
      clearDisplay();
    } else if (key === "." && !currentInput.includes(".")) {
      appendToDisplay(key);
    }
  }

  document.addEventListener("keydown", handleKeyPress);
  clearDisplay();
