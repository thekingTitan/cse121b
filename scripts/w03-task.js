/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Declaration - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

// Function to get values from form controls and perform addition
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// Event listener for the addNumbers button
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// Function Expression - Subtract Numbers
const subtract = function (number1, number2) {
    return number1 - number2;
};

// Function to get values from form controls and perform subtraction
function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

// Event listener for the subtractNumbers button
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

// Arrow Function - Multiply Numbers
const multiply = (number1, number2) => {
    return number1 * number2;
};

// Function to get values from form controls and perform multiplication
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};

// Event listener for the multiplyNumbers button
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Function Declaration - Divide Numbers
function divide(number1, number2) {
    return number1 / number2;
}

// Function to get values from form controls and perform division
function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

// Event listener for the divideNumbers button
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
// Event listener for the Get Total Due button
document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotalInput = document.querySelector('#subtotal');
    let subtotal = Number(subtotalInput.value);

    console.log('Subtotal:', subtotal);

    // Check if subtotal is a valid number
    if (!isNaN(subtotal) && subtotal >= 0) {
        let membershipCheckbox = document.querySelector('#member');
        let isMembershipChecked = membershipCheckbox.checked;

        console.log('Is membership checked:', isMembershipChecked);

        // Apply 20% discount if the membership checkbox is checked
        if (isMembershipChecked) {
            subtotal *= 0.8;
        }

        console.log('Final subtotal:', subtotal);

        // Enable the subtotal input field
        subtotalInput.removeAttribute('disabled');

        // Format and display the total amount
        document.querySelector('#total').textContent = `$${subtotal.toFixed(2)}`;
    } else {
        // Display an error message if the subtotal is not a valid number
        document.querySelector('#total').textContent = 'Invalid subtotal';
    }
});



// Array holding numbers 1 through 13
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

// Assigning values to HTML elements
document.querySelector('#array').textContent = numbersArray.join(', ');

const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').textContent = oddNumbers.join(', ');

const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers.join(', ');

const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;

const multipliedNumbers = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multipliedNumbers.join(', ');

const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;

document.getElementById('subtotal').removeAttribute('disabled');
