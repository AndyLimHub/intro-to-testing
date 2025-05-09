import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic.js';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('should add negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it('should add zero', () => {
    expect(add(0, 0)).toBe(0);
  });

  it('to parse a string into a number', () => {
    expect(add('1', '1')).toBe(2);
  });

  it('should get really angry if you the second argument cannot be parsed into a number', () => {
    expect(() => add('potato', 2)).toThrow('not a number');
  });

  it('should get really angry if the first argument cannot be parsed into a number', () => {
    expect(() => add(2, 'potato')).toThrow('not a number');
  });
});

describe('subtract', () => {
  it('should subtract one number from the other', () => {
    expect(subtract(4, 2)).toBe(2);
  });

  it('should accept two negative numbers', () => {
    expect(subtract(-2, -2)).toBe(0);
  });

  it('should accept a negative int and a zero', () => {
    expect(subtract(-2, 0)).toBe(-2);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(3, 2)).toBe(6);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -2)).toBe(4);
  });

  it('should multiply a negative number times zero', () => {
    expect(Object.is(multiply(-2, 0), -0)).toBe(true);
  });
});

describe('divide', () => {
  it('should divide one integer from another', () => {
    expect(divide(2, 2)).toBe(1);
  });
});
