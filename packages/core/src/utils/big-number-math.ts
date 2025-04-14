/**
 * Adds two large numbers represented as strings
 * @param a First number as string
 * @param b Second number as string
 * @returns Sum as string
 */
export function bigNumberAdd(a: string, b: string): string {
  // Ensure both numbers have the same length by padding with zeros
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');

  let carry = 0;
  let result = '';

  // Process digits from right to left
  for (let i = maxLength - 1; i >= 0; i--) {
    const digitSum = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(digitSum / 10);
    result = (digitSum % 10) + result;
  }

  // Add remaining carry if exists
  if (carry > 0) {
    result = carry + result;
  }

  // Remove leading zeros
  return result.replace(/^0+/, '') || '0';
}

/**
 * Subtracts two large numbers represented as strings
 * @param a First number as string (minuend)
 * @param b Second number as string (subtrahend)
 * @returns Difference as string
 */
export function bigNumberSubtract(a: string, b: string): string {
  // Handle negative results
  if (isSmaller(a, b)) {
    return '-' + bigNumberSubtract(b, a);
  }

  // Pad numbers to same length
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');

  let borrow = 0;
  let result = '';

  // Process digits from right to left
  for (let i = maxLength - 1; i >= 0; i--) {
    let digitA = parseInt(a[i]) - borrow;
    const digitB = parseInt(b[i]);
    borrow = 0;

    if (digitA < digitB) {
      digitA += 10;
      borrow = 1;
    }

    result = digitA - digitB + result;
  }

  // Remove leading zeros
  return result.replace(/^0+/, '') || '0';
}

/**
 * Helper function to compare two string numbers
 * @param a First number as string
 * @param b Second number as string
 * @returns true if a is smaller than b
 */
function isSmaller(a: string, b: string): boolean {
  // Remove leading zeros
  a = a.replace(/^0+/, '');
  b = b.replace(/^0+/, '');

  if (a.length !== b.length) {
    return a.length < b.length;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return a[i] < b[i];
    }
  }

  return false;
}
