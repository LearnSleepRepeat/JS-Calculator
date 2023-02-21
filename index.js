// what is the specific flow? 
// a) enter num1
// b) enter operator
// c) enter num2
// d) press enter/equal sign [currently not yet needed]
// d) update calculationField
// e) update resultField


// functions for the 4 basic operations. only 2 digits are added at once! no brackets or order-rules (all operations have the same priority!)

let result = 0;
let num1 = undefined;
let num2 = undefined;
let operator = undefined;

//those are temp operators (maybe) to set up the rest and get num1 and num2 manually. 


function askNum1() {
num1 = parseInt(prompt("Enter Num1"));
updateCalculateField(num1,num2,operator)
return num1;
}

function askNum2() {
num2 = parseInt(prompt("Enter Num2"));
return num2;
}

askNum1();

const addField = document.getElementById("keyAddition");
addField.addEventListener('click', () => {
    operator = "+"
    updateCalculateField(num1,num2,operator);
    askNum2();
    operate(num1,num2,operator);
})

const subtractField = document.getElementById("keySubtraction");
subtractField.addEventListener('click', () => {
    operator = "-"
    updateCalculateField(num1,num2,operator);
    askNum2();
    operate(num1,num2,operator);
})

const multiplyField = document.getElementById("keyMultiplication");
multiplyField.addEventListener('click', () => {
    operator = "*";
    updateCalculateField(num1,num2,operator);
    askNum2();
    operate(num1,num2,operator)
})

const divideField = document.getElementById("keyDivision");
divideField.addEventListener('click', () => {
    operator = "/";
    updateCalculateField(num1,num2,operator);
    askNum2();
    operate(num1,num2,operator);
})




function operate(num1,num2,operator) {
    updateCalculateField(num1,num2,operator)
    updateResultsField(num1,num2,operator)  
    
    
    // update the calculatefield
    // do the calculation
    // update the resultsfield
}


function updateCalculateField(num1,num2,operator) {
    const calculationField = document.getElementById("calculateField");
    if (num1 === undefined) {calculationField.innerText = `Calculation:`;}
    else if (operator === undefined) {calculationField.innerText = `Calculation: ${num1}`;}
    else if (num2 === undefined) {calculationField.innerText = `Calculation: ${num1} ${operator}`;}
    else {calculationField.innerText = `Calculation: ${num1} ${operator} ${num2}`;}
}

function updateResultsField(num1,num2,operator) {
    const resultsField = document.getElementById("resultField");
    if (operator == "+") {add(num1, num2);}
    else if (operator == "-") {subtract(num1, num2);}
    else if (operator == "*") {multiply(num1, num2);}
    else if (operator == "/") {divide(num1, num2);}
    else {alert("Sorry, there was an error and operator doesn't fit into any category!");}

    resultsField.innerText = `Result: ${result.toFixed(5).replace(/\.00000$/, "")}`
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

