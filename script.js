const input = document.querySelector(".input");
const output = document.querySelector(".result");

const numbers = document.querySelectorAll(".numbers");
numbers.forEach(number => {
    number.addEventListener("click", ()=> {
        if (input.textContent === "0") {
            input.textContent = number.textContent;
        }
        else {
            if ((input.textContent).length < 10) {
                input.textContent += number.textContent;
            }
        }
    })
})
const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    input.textContent = "0";
    flagDecimal = false;
    output.textContent = "";
    flagOperator = false;
    firstNumber = 0;
    operator = 0;
    secondNumber = 0;
    result = 0;
    counter = 0;
})
const del = document.querySelector(".remove");
del.addEventListener("click", () => {

    if (input.textContent.length > 1) {
        input.textContent = (input.textContent.slice(0, input.textContent.length - 1));
    }
    else {
        input.textContent = "0";
    }
})
let counter = 0;
const percent = document.querySelector(".percent");
percent.addEventListener("click", () => {
    if (counter < 3) {
        input.textContent = `${Number(input.textContent) / 100}`
        counter++;
    }
})
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    if (!input.textContent.includes(".")) {
        input.textContent += ".";
    }
})
// operations = ["÷", "×", "-", "+"];
let flagOperator = false;
let firstNumber;
let operator;
let secondNumber;
let result;
const division = document.querySelector(".division");
division.addEventListener("click", () => {
    if (!input.textContent.includes("÷") && !flagOperator) {
        firstNumber = Number(input.textContent)
        operator = "÷";
        input.textContent += "÷";
        output.textContent = input.textContent;
        input.textContent = "";
        flagOperator = true;
        counter = 0;
    } 
})
const multiplication = document.querySelector(".multiplication");
multiplication.addEventListener("click", () => {
    if (!input.textContent.includes("×") && !flagOperator) {
        firstNumber = Number(input.textContent)
        operator = "×";
        input.textContent += "×";
        output.textContent = input.textContent;
        input.textContent = "";
        flagOperator = true;
        counter = 0;
    }
})
const subtraction = document.querySelector(".subtraction");
subtraction.addEventListener("click", () => {
    if (!input.textContent.includes("-") && !flagOperator) {
        firstNumber = Number(input.textContent)
        operator = "-";
        input.textContent += "-";
        output.textContent = input.textContent;
        input.textContent = "";
        flagOperator = true;
        counter = 0;
    } 
})
const addition = document.querySelector(".addition");
addition.addEventListener("click", () => {
    firstNumber = Number(input.textContent)
    if (!input.textContent.includes("+") && !flagOperator) {
        input.textContent += "+";
        operator = "+";
        output.textContent = input.textContent;
        input.textContent = "";
        flagOperator = true;
        counter = 0;
        firstNumber = result;
    } 
})
const equals = document.querySelector(".equals"); 
equals.addEventListener("click", () => {
    secondNumber = Number(input.textContent)
    result = calculate(firstNumber, operator, secondNumber);
    input.textContent = `${result}`;
    output.textContent = "";
    flagOperator = false;
    counter = 0;
})
function calculate(firstNumber, operator, secondNumber) {
    switch(operator) {
        case "÷":
            if (secondNumber == 0)
                return "Undefined";
            return (firstNumber / secondNumber).toFixed(8);
        case "×":
            return (firstNumber * secondNumber);
        case "-":
            return firstNumber - secondNumber;
        case "+": 
            return firstNumber + secondNumber
    }
}