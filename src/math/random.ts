/**
 * Generate a random number within the given range.
 *
 * If only one argument is provided, a number between `0` and the given number is returned.
 *
 * @param minimum - The lower bound (inclusive).
 * @param maximum - The upper bound (exclusive).
 * @returns A random number between minimum (inclusive) and maximum (exclusive). The number can be an integer or a decimal.
 * @throws {Error} Throws an error if `maximum` is not greater than `minimum`.
 *
 * @example
 * const result1 = random(0, 5); // Returns a random number between 0 and 5.
 * const result2 = random(5, 0); // If the minimum is greater than the maximum, an error is thrown
 * const result3 = random(5, 5); // If the minimum is equal to the maximum, an error is thrown.
 */
export function random(maximum: number): number;
export function random(minimum: number, maximum: number): number;
export function random(minimum: number, maximum?: number): number {
  if (maximum == null) {
    maximum = minimum;
    minimum = 0;
  }

  if (minimum >= maximum) {
    throw new Error('Invalid input: The maximum value must be greater than the minimum value.');
  }

  return Math.random() * (maximum - minimum) + minimum;
}
