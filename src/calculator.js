#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * Supports the following arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (√)
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function subtract(a, b) {
  return a - b;
}

function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot calculate modulo with zero divisor');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

function displayMenu() {
  console.log('\n=== Simple Calculator ===');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Modulo');
  console.log('6. Power/Exponentiation');
  console.log('7. Square Root');
  console.log('8. Exit');
  console.log('========================\n');
}

function promptOperation() {
  displayMenu();
  rl.question('Choose an operation (1-8): ', (choice) => {
    switch (choice) {
      case '1':
        performAddition();
        break;
      case '2':
        performSubtraction();
        break;
      case '3':
        performMultiplication();
        break;
      case '4':
        performDivision();
        break;
      case '5':
        performModulo();
        break;
      case '6':
        performPower();
        break;
      case '7':
        performSquareRoot();
        break;
      case '8':
        console.log('Thank you for using the calculator!');
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please try again.');
        promptOperation();
    }
  });
}

function performAddition() {
  rl.question('Enter numbers separated by commas (e.g., 5,10,3): ', (input) => {
    try {
      const numbers = input.split(',').map(n => parseFloat(n.trim()));
      if (numbers.some(isNaN)) throw new Error('Invalid input');
      const result = add(...numbers);
      console.log(`Result: ${numbers.join(' + ')} = ${result}`);
      promptOperation();
    } catch (error) {
      console.log('Error: Invalid input. Please enter valid numbers.');
      promptOperation();
    }
  });
}

function performSubtraction() {
  rl.question('Enter first number: ', (a) => {
    rl.question('Enter second number: ', (b) => {
      try {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        if (isNaN(num1) || isNaN(num2)) throw new Error('Invalid input');
        const result = subtract(num1, num2);
        console.log(`Result: ${num1} - ${num2} = ${result}`);
        promptOperation();
      } catch (error) {
        console.log('Error: Invalid input. Please enter valid numbers.');
        promptOperation();
      }
    });
  });
}

function performMultiplication() {
  rl.question('Enter numbers separated by commas (e.g., 2,3,4): ', (input) => {
    try {
      const numbers = input.split(',').map(n => parseFloat(n.trim()));
      if (numbers.some(isNaN)) throw new Error('Invalid input');
      const result = multiply(...numbers);
      console.log(`Result: ${numbers.join(' * ')} = ${result}`);
      promptOperation();
    } catch (error) {
      console.log('Error: Invalid input. Please enter valid numbers.');
      promptOperation();
    }
  });
}

function performDivision() {
  rl.question('Enter dividend (first number): ', (a) => {
    rl.question('Enter divisor (second number): ', (b) => {
      try {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        if (isNaN(num1) || isNaN(num2)) throw new Error('Invalid input');
        const result = divide(num1, num2);
        console.log(`Result: ${num1} / ${num2} = ${result}`);
        promptOperation();
      } catch (error) {
        console.log(`Error: ${error.message}`);
        promptOperation();
      }
    });
  });
}

function performModulo() {
  rl.question('Enter dividend (first number): ', (a) => {
    rl.question('Enter divisor (second number): ', (b) => {
      try {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        if (isNaN(num1) || isNaN(num2)) throw new Error('Invalid input');
        const result = modulo(num1, num2);
        console.log(`Result: ${num1} % ${num2} = ${result}`);
        promptOperation();
      } catch (error) {
        console.log(`Error: ${error.message}`);
        promptOperation();
      }
    });
  });
}

function performPower() {
  rl.question('Enter base: ', (base) => {
    rl.question('Enter exponent: ', (exp) => {
      try {
        const baseNum = parseFloat(base);
        const expNum = parseFloat(exp);
        if (isNaN(baseNum) || isNaN(expNum)) throw new Error('Invalid input');
        const result = power(baseNum, expNum);
        console.log(`Result: ${baseNum} ^ ${expNum} = ${result}`);
        promptOperation();
      } catch (error) {
        console.log(`Error: ${error.message}`);
        promptOperation();
      }
    });
  });
}

function performSquareRoot() {
  rl.question('Enter number: ', (input) => {
    try {
      const num = parseFloat(input);
      if (isNaN(num)) throw new Error('Invalid input');
      const result = squareRoot(num);
      console.log(`Result: √${num} = ${result}`);
      promptOperation();
    } catch (error) {
      console.log(`Error: ${error.message}`);
      promptOperation();
    }
  });
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

if (require.main === module) {
  console.log('Welcome to the Node.js CLI Calculator!');
  promptOperation();
}
