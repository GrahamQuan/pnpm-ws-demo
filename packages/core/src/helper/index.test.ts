import { describe, it, expect } from 'vitest';
import { getRandomString, getTime } from './index';

describe('helper', () => {
  it('should get time', () => {
    const time = getTime();
    expect(time).toBeDefined();
  });

  it('should get random string', () => {
    const randomString = getRandomString(10);
    expect(randomString).toBeDefined();
    expect(randomString.length).toBe(10);
  });
});
