import { describe, expect, it } from 'vitest';
import { bigNumberAdd, bigNumberSubtract } from './big-number-math';

describe('big-number-math', () => {
  it('should add two big numbers', () => {
    expect(bigNumberAdd('999999999999999999', '1')).toBe('1000000000000000000');
    expect(bigNumberAdd('123456789012345678', '987654321987654321')).toBe(
      '1111111110999999999'
    );
  });

  it('should subtract two big numbers', () => {
    expect(bigNumberSubtract('1000000000000000000', '1')).toBe(
      '999999999999999999'
    );
    expect(bigNumberSubtract('987654321987654321', '123456789012345678')).toBe(
      '864197532975308643'
    );
  });
});
