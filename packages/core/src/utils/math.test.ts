import { describe, it, expect } from 'vitest';
import { add, sub } from './math';

describe('math utils', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should add two large numbers', () => {
    expect(add(123, 345)).toBe(468);
  });

  it('should subtract two numbers', () => {
    expect(sub(5, 2)).toBe(3);
  });
});
