import { mapValues as mapValuesToolkit } from '../../object/mapValues.ts';
import { identity } from '../_internal/identity.ts';
import { property } from './property.ts';

/**
 * Creates a new object with the same keys as the given object, but with values generated
 * by running each own enumerable property of the object through the iteratee function.
 *
 * @template T - The type of the object.
 * @template K - The type of the keys in the object.
 * @template V - The type of the new values generated by the iteratee function.
 *
 * @param object - The object to iterate over.
 * @param getNewValue - The function invoked per own enumerable property.
 * @returns - Returns the new mapped object.
 *
 * @example
 * // Example usage:
 * const obj = { a: 1, b: 2 };
 * const result = mapValues(obj, (value) => value * 2);
 * console.log(result); // { a: 2, b: 4 }
 */
export function mapValues<T extends object, K extends keyof T, V>(
  object: T,
  getNewValue?: PropertyKey | readonly PropertyKey[] | null | undefined
): Record<K, V>;

/**
 * Creates a new object with the same keys as the given object, but with values generated
 * by running each own enumerable property of the object through the iteratee function.
 *
 * @template T - The type of the object.
 * @template K - The type of the keys in the object.
 * @template V - The type of the new values generated by the iteratee function.
 *
 * @param object - The object to iterate over.
 * @param getNewValue - The function invoked per own enumerable property.
 * @returns - Returns the new mapped object.
 *
 * @example
 * // Example usage:
 * const obj = { a: 1, b: 2 };
 * const result = mapValues(obj, (value) => value * 2);
 * console.log(result); // { a: 2, b: 4 }
 */
export function mapValues<T extends object, K extends keyof T, V>(
  object: T,
  getNewValue: (value: T[K], key: K, object: T) => V
): Record<K, V>;

export function mapValues<T extends object, K extends keyof T, V>(
  object: T,
  getNewValue?: PropertyKey | readonly PropertyKey[] | null | undefined | ((value: T[K], key: K, object: T) => V)
): Record<K, V> {
  getNewValue = getNewValue ?? (identity as (value: T[K], key: K, object: T) => V);

  switch (typeof getNewValue) {
    case 'string':
    case 'symbol':
    case 'number':
    case 'object': {
      return mapValuesToolkit(object, property(getNewValue));
    }
    case 'function': {
      return mapValuesToolkit(object, getNewValue);
    }
  }
}
