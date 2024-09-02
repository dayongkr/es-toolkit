import { ary } from './ary.ts';

/**
 * Creates a function that accepts up to one argument, ignoring any additional arguments.
 *
 * @template F - The type of the function.
 * @param func - The function to cap arguments for.
 * @returns Returns the new capped function.
 */
export function unary<F extends (...args: any[]) => any>(func: F): (...args: any[]) => ReturnType<F> {
  return ary(func, 1);
}
