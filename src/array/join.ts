/**
 *
 * Join elements of an array into a string.
 *
 * @template T - The type of elements in the array.
 * @param array - The array to join.
 * @param separator - The separator used to join the elements, default is common separator `,`.
 * @returns - Returns a string containing all elements of the array joined by the specified separator.
 *
 * @example
 * ```typescript
 * const arr = ["a","b","c"];
 * const result = join(arr, "~");
 * console.log(result); // Output: "a~b~c"
 * ```
 *
 */
export function join<T>(array: readonly T[], separator = ','): string {
  return array.join(separator);
}
