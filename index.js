// bugs & improvement potentials: if you enter a float, the numbers after the period only appear when the value is different from its parsed value. so "9.0004" will stay as "9" 
// in the display field until you enter the last digit" (reason is that the display uses "ParseFloat" to display the value and "parseFloat("9.000") is 9)
// it will also be slightly wanky if you press the period several times while entering a number.

let result = 0;
let num1string = "";
let num2string = "";
let num1 = undefined;
let num2 = undefined;
let operator = undefined;

//const resultsField = document.getElementById("resultField");

const reset = document.querySelector("#reset");
reset.addEventListener("click", function() {resetAll()});

document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
    let numberkey = event.key;
    document.getElementById(numberkey).classList.add("active")
    updateNumber(numberkey);
    }
    else if (event.key === "."){
    let numberkey = ".";
    document.getElementById(numberkey).classList.add("active")
    updateNumber(numberkey);
    }
    else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        selectOperator(event.key)
        document.getElementById(event.key).classList.add("active")
        updateCalculateField(num1,num2,operator)
    }
    else if (event.key === "Enter") {
        num1 = parseFloat(num1string)
        num2 = parseFloat(num2string)
        document.getElementById("keyEqual").classList.add("active")
        updateResultsField(num1,num2,operator) 
    }
    else if (event.key === "Escape") {
        resetAll();
        document.getElementById("reset").classList.add("active")
    }
});

// remove hover effect when button isn't pressed anymore
document.addEventListener('keyup', (event) => {
const elementsToRemoveActive = document.querySelectorAll('div.number, div.operator, div.equal, div.dot, div.reset');
elementsToRemoveActive.forEach(element => {
    element.classList.remove("active");
});
})


const operators = document.querySelectorAll(".operator");
operators.forEach(function(operation) {
    operation.addEventListener("click", function() {selectOperator(operation.id)});
})

function selectOperator(operation) {
    operator = operation
    updateCalculateField(num1,num2,operator);
}

const equalField = document.getElementById("keyEqual");
equalField.addEventListener('click', () => {
    num1 = parseFloat(num1string);
    num2 = parseFloat(num2string);
    updateResultsField(num1,num2,operator);
})

function operate(num1,num2,operator) {
    updateCalculateField(num1,num2,operator);
    updateResultsField(num1,num2,operator);
}


function updateCalculateField(num1,num2,operator) {
    const calculationField = document.getElementById("calculateField");
    num1 = parseFloat(num1string)
    num2 = parseFloat(num2string)
    if (num1 === undefined || isNaN(num1)) {calculationField.innerText = ``;}
    else if (operator === undefined) {calculationField.innerText = `${num1}`;}
    else if (num2 === undefined || isNaN(num2)) {calculationField.innerText = `${num1} ${operator}`;}
    else {calculationField.innerText = `${num1} ${operator} ${num2}`;}
}

function updateResultsField(num1,num2,operator) {
    if (num1 === undefined || isNaN(num1) || operator === undefined || num2 === undefined || isNaN(num2)) {
        resetAll();
        return alert("You need to enter two numbers and select an operator before you can ask for a result.");
        }
    else if (operator == "+") {add(num1, num2);}
    else if (operator == "-") {subtract(num1, num2);}
    else if (operator == "*") {multiply(num1, num2);}
    else if (operator == "/") {divide(num1, num2);}
    //resultsField.innerText = `${result.toFixed(5).replace(/\.00000$/, "")}`;
    num1 = num1string = result.toFixed(5).replace(/\.00000$/, "");
    num2string = "";
    num2 = undefined;
    operator = undefined;
    updateCalculateField(num1,num2,operator)
}

const numbers = document.querySelectorAll(".number");
numbers.forEach(function(number) {
    number.addEventListener("click", function() {updateNumber(number.id)});
})

const dot = document.getElementById(".");
dot.addEventListener("click", function() {updateNumber(".")});


function updateNumber(number) {
    if (operator === undefined) {
    num1string += number;
    updateCalculateField(num1,num2,operator)        
    }
    else {
    num2string += number;
    updateCalculateField(num1,num2,operator)        
    }
}



function add(num1, num2) {
    result = num1 + num2;
    return result
}

function subtract(num1, num2) {
    result = num1-num2;
    return result
}

function multiply(num1, num2) {
    result = num1*num2;
    return result
}

function divide(num1, num2) {
    result = num1/num2;
    return result
}

function resetAll() {
    result = 0;
    num1string = "";
    num2string = "";
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    updateCalculateField(num1,num2,operator)
    //resultsField.innerText = ""
}