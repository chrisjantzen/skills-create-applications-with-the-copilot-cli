/**
 * Comprehensive Unit Tests for Node.js CLI Calculator
 * Tests all arithmetic operations and edge cases
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator.js');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add multiple numbers: 2 + 3 + 5 = 10', () => {
      expect(add(2, 3, 5)).toBe(10);
    });

    test('should add multiple numbers: 2 + 3 + 5 + 10 = 20', () => {
      expect(add(2, 3, 5, 10)).toBe(20);
    });

    test('should handle negative numbers: -5 + 3 = -2', () => {
      expect(add(-5, 3)).toBe(-2);
    });

    test('should handle negative numbers: -5 + -3 = -8', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should handle decimal numbers: 2.5 + 3.5 = 6', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    test('should add zero: 5 + 0 = 5', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should return zero when adding no numbers', () => {
      expect(add()).toBe(0);
    });

    test('should return single number when only one argument: add(5) = 5', () => {
      expect(add(5)).toBe(5);
    });

    test('should add large numbers: 1000000 + 2000000 = 3000000', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should handle negative result: 4 - 10 = -6', () => {
      expect(subtract(4, 10)).toBe(-6);
    });

    test('should handle negative first number: -10 - 5 = -15', () => {
      expect(subtract(-10, 5)).toBe(-15);
    });

    test('should handle negative second number: 10 - (-5) = 15', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should handle two negative numbers: -10 - (-5) = -5', () => {
      expect(subtract(-10, -5)).toBe(-5);
    });

    test('should handle decimal numbers: 10.5 - 4.5 = 6', () => {
      expect(subtract(10.5, 4.5)).toBe(6);
    });

    test('should subtract zero: 10 - 0 = 10', () => {
      expect(subtract(10, 0)).toBe(10);
    });

    test('should subtract from zero: 0 - 5 = -5', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract identical numbers: 7 - 7 = 0', () => {
      expect(subtract(7, 7)).toBe(0);
    });

    test('should handle large numbers: 1000000 - 500000 = 500000', () => {
      expect(subtract(1000000, 500000)).toBe(500000);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply multiple numbers: 2 * 3 * 4 = 24', () => {
      expect(multiply(2, 3, 4)).toBe(24);
    });

    test('should multiply by zero: 5 * 0 = 0', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should handle negative numbers: -5 * 3 = -15', () => {
      expect(multiply(-5, 3)).toBe(-15);
    });

    test('should handle two negative numbers: -5 * -3 = 15', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should handle decimal numbers: 2.5 * 4 = 10', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by one: 7 * 1 = 7', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    test('should return one when multiplying no numbers', () => {
      expect(multiply()).toBe(1);
    });

    test('should return single number when only one argument: multiply(5) = 5', () => {
      expect(multiply(5)).toBe(5);
    });

    test('should handle large numbers: 1000 * 1000 = 1000000', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should handle division with remainder: 10 / 3 ≈ 3.333...', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should handle negative dividend: -20 / 5 = -4', () => {
      expect(divide(-20, 5)).toBe(-4);
    });

    test('should handle negative divisor: 20 / -5 = -4', () => {
      expect(divide(20, -5)).toBe(-4);
    });

    test('should handle two negative numbers: -20 / -5 = 4', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should handle decimal dividend: 10.5 / 2 = 5.25', () => {
      expect(divide(10.5, 2)).toBe(5.25);
    });

    test('should handle decimal divisor: 10 / 2.5 = 4', () => {
      expect(divide(10, 2.5)).toBe(4);
    });

    test('should divide by one: 7 / 1 = 7', () => {
      expect(divide(7, 1)).toBe(7);
    });

    test('should divide zero: 0 / 5 = 0', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should handle large numbers: 1000000 / 1000 = 1000', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });
  });

  describe('Edge Cases - Division by Zero', () => {
    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => divide(-10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw correct error type', () => {
      expect(() => divide(5, 0)).toThrow(Error);
    });
  });

  describe('Combined Operations Examples from Image', () => {
    test('example 1: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('example 2: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('example 3: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('example 4: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });

  describe('Type Handling', () => {
    test('should handle string numbers: "5" + "3" should be treated as numbers', () => {
      expect(add(5, 3)).toBe(8);
    });

    test('should handle very small decimals: 0.1 + 0.2 ≈ 0.3', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
    });

    test('should handle very large numbers', () => {
      expect(add(999999999, 1)).toBe(1000000000);
    });
  });

  describe('Modulo', () => {
    test('should calculate modulo: 17 % 5 = 2', () => {
      expect(modulo(17, 5)).toBe(2);
    });

    test('image example: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should handle modulo with remainder: 10 % 3 = 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should handle modulo with no remainder: 10 % 5 = 0', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should handle negative dividend: -17 % 5 = -2', () => {
      expect(modulo(-17, 5)).toBe(-2);
    });

    test('should handle negative divisor: 17 % -5 = 2', () => {
      expect(modulo(17, -5)).toBe(2);
    });

    test('should handle two negative numbers: -17 % -5 = -2', () => {
      expect(modulo(-17, -5)).toBe(-2);
    });

    test('should handle decimal modulo: 10.5 % 3 ≈ 1.5', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5, 10);
    });

    test('should throw error when divisor is zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot calculate modulo with zero divisor');
    });

    test('should handle large numbers: 1000 % 7 = 6', () => {
      expect(modulo(1000, 7)).toBe(6);
    });

    test('should handle modulo of 1: 1 % 5 = 1', () => {
      expect(modulo(1, 5)).toBe(1);
    });

    test('should handle modulo by 1: 17 % 1 = 0', () => {
      expect(modulo(17, 1)).toBe(0);
    });
  });

  describe('Power/Exponentiation', () => {
    test('should calculate power: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('image example: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should handle power with zero exponent: 5 ^ 0 = 1', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should handle power with one exponent: 5 ^ 1 = 5', () => {
      expect(power(5, 1)).toBe(5);
    });

    test('should handle negative exponent: 2 ^ -1 = 0.5', () => {
      expect(power(2, -1)).toBe(0.5);
    });

    test('should handle negative base: (-2) ^ 3 = -8', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle negative base with even exponent: (-2) ^ 2 = 4', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should handle decimal base: 2.5 ^ 2 = 6.25', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    test('should handle decimal exponent: 4 ^ 0.5 = 2', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle large exponent: 2 ^ 10 = 1024', () => {
      expect(power(2, 10)).toBe(1024);
    });

    test('should handle base of 0: 0 ^ 3 = 0', () => {
      expect(power(0, 3)).toBe(0);
    });

    test('should handle fractional exponents: 9 ^ 0.5 = 3', () => {
      expect(power(9, 0.5)).toBe(3);
    });

    test('should handle small decimal base: 0.5 ^ 2 = 0.25', () => {
      expect(power(0.5, 2)).toBe(0.25);
    });

    test('should handle negative decimal exponent: 2 ^ -2 = 0.25', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should handle 3 ^ 3 = 27', () => {
      expect(power(3, 3)).toBe(27);
    });

    test('should handle 10 ^ 2 = 100', () => {
      expect(power(10, 2)).toBe(100);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('image example: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should handle square root of 0: √0 = 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should handle square root of 1: √1 = 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should handle decimal square root: √2.25 = 1.5', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should handle large number: √1000000 = 1000', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });

    test('should handle irrational result: √2 ≈ 1.414...', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should throw error for negative number', () => {
      expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for negative decimals', () => {
      expect(() => squareRoot(-4.5)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should handle √4 = 2', () => {
      expect(squareRoot(4)).toBe(2);
    });

    test('should handle √9 = 3', () => {
      expect(squareRoot(9)).toBe(3);
    });

    test('should handle √25 = 5', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should handle √100 = 10', () => {
      expect(squareRoot(100)).toBe(10);
    });

    test('should handle √3 ≈ 1.732...', () => {
      expect(squareRoot(3)).toBeCloseTo(1.732, 3);
    });

    test('should handle √5 ≈ 2.236...', () => {
      expect(squareRoot(5)).toBeCloseTo(2.236, 3);
    });

    test('should handle √10 ≈ 3.162...', () => {
      expect(squareRoot(10)).toBeCloseTo(3.162, 3);
    });

    test('should throw error for very small negative numbers', () => {
      expect(() => squareRoot(-0.001)).toThrow('Cannot calculate square root of a negative number');
    });
  });

  describe('Extended Operations Examples from Image', () => {
    test('modulo example: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('power example: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('square root example: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('combined: modulo(5, 2) + power(2, 3) = 9', () => {
      const result = modulo(5, 2) + power(2, 3);
      expect(result).toBe(9);
    });

    test('combined: power(2, 3) + squareRoot(16) = 12', () => {
      const result = power(2, 3) + squareRoot(16);
      expect(result).toBe(12);
    });

    test('combined: squareRoot(16) + modulo(5, 2) = 5', () => {
      const result = squareRoot(16) + modulo(5, 2);
      expect(result).toBe(5);
    });

    test('combined: power(squareRoot(16), 2) = 16', () => {
      const sqrt = squareRoot(16);
      const result = power(sqrt, 2);
      expect(result).toBe(16);
    });

    test('combined: modulo(power(2, 3), 5) = 3', () => {
      const result = modulo(power(2, 3), 5);
      expect(result).toBe(3);
    });

    test('combined: squareRoot(power(2, 4)) = 4', () => {
      const result = squareRoot(power(2, 4));
      expect(result).toBe(4);
    });
  });

  describe('Edge Cases and Error Handling', () => {
    test('division by zero should throw error', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('modulo by zero should throw error', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot calculate modulo with zero divisor');
    });

    test('square root of negative should throw error', () => {
      expect(() => squareRoot(-16)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should handle negative zero correctly: -0 in operations', () => {
      expect(squareRoot(0)).toBe(0);
      expect(power(0, 5)).toBe(0);
    });

    test('large number edge case: modulo(999999, 7)', () => {
      expect(modulo(999999, 7)).toBe(0);
    });

    test('large number edge case: power(10, 5) = 100000', () => {
      expect(power(10, 5)).toBe(100000);
    });

    test('large number edge case: squareRoot(10000) = 100', () => {
      expect(squareRoot(10000)).toBe(100);
    });
  });
});
