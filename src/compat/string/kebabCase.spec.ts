import { describe, it, expect } from 'vitest';
import { kebabCase } from './kebabCase';

describe('kebabCase', () => {
  const strings = ['foo bar', 'Foo bar', 'foo Bar', 'Foo Bar', 'FOO BAR', 'fooBar', '--foo-bar--', '__foo_bar__'];

  it('should convert string', () => {
    const actual = strings.map(kebabCase);
    const expected = actual.map(() => 'foo-bar');
    expect(actual).toEqual(expected);
  });

  it('should handle double-converting strings', () => {
    const actual = strings.map(str => kebabCase(kebabCase(str)));
    const expected = actual.map(() => 'foo-bar');
    expect(actual).toEqual(expected);
  });

  it('should remove constraction apostrophes', () => {
    const apostrophes = ["'", '\u2019'];
    const postfixes = ['d', 'll', 'm', 're', 's', 't', 've'];

    const actual = apostrophes.map(apostrophe => postfixes.map(postfix => kebabCase(`a b${apostrophe}${postfix} c`)));
    const expected = apostrophes.map(() => postfixes.map(postfixes => `a-b${postfixes}-c`));

    expect(actual).toEqual(expected);
  });

  it('should remove remove Latin mathematical operators', () => {
    expect(kebabCase('\xd7')).toBe('');
    expect(kebabCase('\xf7')).toBe('');
  });

  it('should coerce string to a string', () => {
    expect(kebabCase(Object('foo bar'))).toBe('foo-bar');
    expect(kebabCase({ toString: () => 'foo bar' })).toBe('foo-bar');
  });
});
