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
});

describe('subtract', () => {
  it('subtract one number from the other', () => {
    expect(subtract(4, 2)).toBe(2);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(3, 2)).toBe(6);
  });
});

describe('divide', () => {
  it('should divide one integer from another', () => {
    expect(divide(2, 2)).toBe(1);
  });
});
