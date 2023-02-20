// what is the specific flow? 
// a) enter num1
// b) enter operator
// c) enter num2
// d) press enter/equal sign
// d) update calculationField
// e) update resultField


// functions for the 4 basic operations. only 2 digits are added at once! no brackets or order-rules (all operations have the same priority!)

let result = 0

let num1 = prompt("Enter Num1");
let num2 = prompt("Enter Num2");
alert("click on the desired operator");

let operator = "+";



const addField = document.getElementById("keyAddition");
addField.addEventListener('click', () => {
    operator = "addition"
})

const subtractField = document.getElementById("keySubtraction");
subtractField.addEventListener('click', () => {
    operator = "subtraction"
})

const multiplyField = document.getElementById("keyMultiplication");
multiplyField.addEventListener('click', () => {
    operator = "multiplication"
})

const divideField = document.getElementById("keyDivision");
divideField.addEventListener('click', () => {
    operator = "division"
})


operate(num1,num2,operator)

function operate(num1,num2,operator) {
    updateCalculateField(num1,num2,operator)

    
    
    
    // update the calculatefield
    // do the calculation
    // update the resultsfield
}


function updateCalculateField(num1,num2,operator) {
    const calculationField = document.getElementById("calculateField");
    calculationField.innerText = `${num1} ${operator} ${num2}`
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

