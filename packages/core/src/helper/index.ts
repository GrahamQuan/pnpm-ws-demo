export function getTime(): string {
  return new Date().toISOString();
}

export function getRandomString(length: number = 10): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}
