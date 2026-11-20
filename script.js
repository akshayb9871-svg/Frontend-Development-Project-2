let display = document.querySelector(".current-value");
let previousDisplay = document.querySelector(".previous-value");
let buttons = document.querySelectorAll(".calculator-button");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        let value = button.textContent;

        // Clear calculator
        if (value === "Ac") {
            display.textContent = "";
            firstNumber = "";
            secondNumber = "";
            operator = "";
            result = "";
        }

        // Select operator
        else if (value === "+" || value === "-" || value === "/" || value === "x") {
            firstNumber = display.textContent;
            operator = value;
            display.textContent = "";
        }

        // Calculate result
        else if (value === "=") {
            secondNumber = display.textContent;

            let num1 = Number(firstNumber);
            let num2 = Number(secondNumber);

            if (operator === "+") {
                result = num1 + num2;
            }
            else if (operator === "-") {
                result = num1 - num2;
            }
            else if (operator === "x") {
                result = num1 * num2;
            }
            else if (operator === "/") {
                result = num2 === 0 ? "Cannot divide by zero" : num1 / num2;
            }

            display.textContent = result;
        }

        // Display numbers
        else {
            display.textContent += value;
        }
    });
});
