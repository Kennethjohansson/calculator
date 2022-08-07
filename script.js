const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.querySelector('.calculatorDisplay')
    display.value = calculator.displayValue
}

updateDisplay();

const keys = document.querySelector('.calculatorKeys');
keys.addEventListener('click', (event) => {
    const { target } = event;

if (!target.matches('button')) {
        return;
    
}

if (target.classList.contains('operator')) {
    console.log('operator', target.value); 
    return;
}   

if (target.classList.contains('decimal')) {
    console.log('decimal', target.value)
}

if (target.classList.contains('all-Clear')) {
    console.log('all-clear', target.value)
}

inputDigit(target.value);
updateDisplay();

});


function inputDigit(digit) {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}






// let currentTotal = 0;
// let buffer = "0";

// let previousOperator = null;

// const calculator_display = document.querySelector(".calculatorDisplay");

// document.querySelector('.calculatorKeys').addEventListener('click', e => {
//     buttonClick(e.target.innerHTML);
// });

// function buttonCLick()




// const calculator_display = document.querySelector('.calculatorDisplay')
// const calculator_keys = document.querySelector('.calculatorKeys')

// calculator_keys.addEventListener('click', e => {
//     if (e.target.matches('button')) {
//         const key = e.target
//         const action = key.dataset.action
//     } 
// })


// if (!action) {
//     console.log('number key!')
// }

// if (
//     action === 'add' ||
//     action === 'subtract' ||
//     action === 'multiply' ||
//     action === 'divide'
// ) {
//     console.log('Its an operator key!')
// }

// if (
//     action === 'decimal'
// ) {
//     console.log('This is a decimal!')
// }

// if (
//     action === 'clear'
// ) {
//     console.log('This clears everything!')
// }

// if (
//     action === 'calculate'
// ) {
//     console.log('This calculates!')
// }






// // document.querySelectorAll('.calculatorDisplay').innerHTML


// // function updateDisplay() {
// //     const display = document.querySelector('.inputOutput');
// //     display.value = calculator.displayValue;
// // }

// // var input = '0';
// // var numberButtons = null;
// // var operators = null;
// // var clear = false;
// // var resulte = null


// //Declare var for
// //Input
// //nummer-buttons
// //operators
// //result
// //Clear
// //Result displayed FLAG --> To keep an eye on what output is displayed

// // Adding click-handler for the numbers

// // Store the number button-strings

// //IF result is not displyed, keep adding until you can get a result

// // NEEDS to add an operator and another string to get a result

// //After clicking an operator, rense the field and add another number