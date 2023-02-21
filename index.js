// what is the specific flow? 
// a) enter num1
// b) enter operator
// c) enter num2
// d) press enter/equal sign [currently not yet needed]
// d) update calculationField
// e) update resultField


// functions for the 4 basic operations. only 2 digits are added at once! no brackets or order-rules (all operations have the same priority!)

// bugs: updateResultsField : make it work if no operator / num2 is selected. and if a proper calculation is done, then reset everything. 

let result = 0;
let num1string = "";
let num2string = "";
let num1 = undefined;
let num2 = undefined;
let operator = undefined;

const resultsField = document.getElementById("resultField");

const reset = document.querySelector("#reset");
reset.addEventListener("click", function() {resetAll()});

document.addEventListener('keyup', (event) => {
    if (event.key >= '0' && event.key <= '9') {
    let numberkey = event.key;
    updateNumber(numberkey);
    }
    else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        selectOperator(event.key)
        updateCalculateField(num1,num2,operator)
    }
    else if (event.key === "Enter") {
        num1 = parseInt(num1string)
        num2 = parseInt(num2string)
        updateResultsField(num1,num2,operator) 
    }
    else if (event.key === "Escape") {
        resetAll()
    }
});

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
    num1 = parseInt(num1string);
    num2 = parseInt(num2string);
    updateResultsField(num1,num2,operator);
})

function operate(num1,num2,operator) {
    updateCalculateField(num1,num2,operator);
    updateResultsField(num1,num2,operator);
}


function updateCalculateField(num1,num2,operator) {
    const calculationField = document.getElementById("calculateField");
    num1 = parseInt(num1string)
    num2 = parseInt(num2string)
    console.log(`num1string: ${num1string} , num1: ${num1}, num2string: ${num2string} , num2: ${num2}`)
    if (num1 === undefined || isNaN(num1)) {calculationField.innerText = `Calculation:`;}
    else if (operator === undefined) {calculationField.innerText = `Calculation: ${num1}`;}
    else if (num2 === undefined || isNaN(num2)) {calculationField.innerText = `Calculation: ${num1} ${operator}`;}
    else {calculationField.innerText = `Calculation: ${num1} ${operator} ${num2}`;}
}

function updateResultsField(num1,num2,operator) {
    if (operator == "+") {add(num1, num2);}
    else if (operator == "-") {subtract(num1, num2);}
    else if (operator == "*") {multiply(num1, num2);}
    else if (operator == "/") {divide(num1, num2);}
    else {alert("Sorry, there was an error and operator doesn't fit into any category!");}

    resultsField.innerText = `Result: ${result.toFixed(5).replace(/\.00000$/, "")}`
}

const numbers = document.querySelectorAll(".number");
numbers.forEach(function(number) {
    number.addEventListener("click", function() {updateNumber(number.id)});
})


function updateNumber(number) {
    if (operator === undefined) {
    num1string += number;
    updateCalculateField(num1,num2,operator)        
    console.log(`num1string: ${num1string} , num1: ${num1}, num2string: ${num2string} , num2: ${num2}`)
    }
    else {
    num2string += number;
    updateCalculateField(num1,num2,operator)        
    console.log(`num1string: ${num1string} , num1: ${num1}, num2string: ${num2string} , num2: ${num2}`)
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
    resultsField.innerText = "Result:"
}