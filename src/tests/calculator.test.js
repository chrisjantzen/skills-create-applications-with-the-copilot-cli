/**
 * Comprehensive Unit Tests for Node.js CLI Calculator
 * Tests all four basic arithmetic operations and edge cases
 */

const { add, subtract, multiply, divide } = require('../calculator.js');

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
});
