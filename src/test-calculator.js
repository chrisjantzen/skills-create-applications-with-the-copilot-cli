/**
 * Test file for the Node.js CLI Calculator
 * Tests the four basic operations with examples from the UI
 */

const { add, subtract, multiply, divide } = require('./calculator.js');

console.log('=== Calculator Test Suite ===\n');

try {
  // Test 1: Addition (2 + 3)
  const addResult = add(2, 3);
  console.log(`✓ Addition: 2 + 3 = ${addResult}`);
  console.log(`  Expected: 5, Got: ${addResult}, Status: ${addResult === 5 ? 'PASS' : 'FAIL'}\n`);

  // Test 2: Subtraction (10 - 4)
  const subtractResult = subtract(10, 4);
  console.log(`✓ Subtraction: 10 - 4 = ${subtractResult}`);
  console.log(`  Expected: 6, Got: ${subtractResult}, Status: ${subtractResult === 6 ? 'PASS' : 'FAIL'}\n`);

  // Test 3: Multiplication (45 * 2)
  const multiplyResult = multiply(45, 2);
  console.log(`✓ Multiplication: 45 * 2 = ${multiplyResult}`);
  console.log(`  Expected: 90, Got: ${multiplyResult}, Status: ${multiplyResult === 90 ? 'PASS' : 'FAIL'}\n`);

  // Test 4: Division (20 / 5)
  const divideResult = divide(20, 5);
  console.log(`✓ Division: 20 / 5 = ${divideResult}`);
  console.log(`  Expected: 4, Got: ${divideResult}, Status: ${divideResult === 4 ? 'PASS' : 'FAIL'}\n`);

  // Test 5: Division by zero error handling
  console.log('Testing error handling...');
  try {
    divide(10, 0);
    console.log('✗ Division by zero: FAIL - Should have thrown an error\n');
  } catch (error) {
    console.log(`✓ Division by zero: ${error.message}`);
    console.log(`  Status: PASS - Error correctly caught\n`);
  }

  // Test 6: Multiple additions
  const multiAddResult = add(2, 3, 5, 10);
  console.log(`✓ Multiple additions: 2 + 3 + 5 + 10 = ${multiAddResult}`);
  console.log(`  Expected: 20, Got: ${multiAddResult}, Status: ${multiAddResult === 20 ? 'PASS' : 'FAIL'}\n`);

  // Test 7: Multiple multiplications
  const multiMultiplyResult = multiply(2, 3, 4);
  console.log(`✓ Multiple multiplications: 2 * 3 * 4 = ${multiMultiplyResult}`);
  console.log(`  Expected: 24, Got: ${multiMultiplyResult}, Status: ${multiMultiplyResult === 24 ? 'PASS' : 'FAIL'}\n`);

  console.log('=== All Tests Complete ===');
} catch (error) {
  console.error('Test error:', error.message);
}
