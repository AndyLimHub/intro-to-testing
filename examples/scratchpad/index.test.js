import { test, expect, vi } from 'vitest';

// mock - A function that you plan on just being a placeholder
// spies - Keeps what you had before but wraps it with new abilities

// const logSpy = vi.spyOn(console, 'log');

const randomSpy = vi.spyOn(Math, 'random').mockImplementation(() => 0.5);

test('a super simple test', () => {
  const mockFn = vi.fn();

  mockFn('Hello world');

  expect(mockFn).toHaveBeenCalled;
  expect(mockFn).toHaveBeenCalledWith('Hello world');
  expect(mockFn).toHaveBeenCalledOnce;
  expect(mockFn).toHaveBeenCalled(1);

  const result = Math.random();
  expect(result).toBe(0.5);
});
