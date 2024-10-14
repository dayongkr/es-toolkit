import { isSet as isSetToolkit } from 'es-toolkit';
import { isSet as isSetToolkitCompat } from 'es-toolkit/compat';
import { isSet as isSetLodash } from 'lodash';
import { bench, describe } from '../bench';

describe('isSet', () => {
  bench('es-toolkit/isSet', () => {
    isSetToolkit(new Set());
    isSetToolkit(new WeakSet());
    isSetToolkit([]);
    isSetToolkit({});
    isSetToolkit(null);
  });

  bench('es-toolkit/isSetCompat', () => {
    isSetToolkitCompat(new Set());
    isSetToolkitCompat(new WeakSet());
    isSetToolkitCompat([]);
    isSetToolkitCompat({});
    isSetToolkitCompat(null);
  });

  bench('lodash/isSet', () => {
    isSetLodash(new Set());
    isSetLodash(new WeakSet());
    isSetLodash([]);
    isSetLodash({});
    isSetLodash(null);
  });
});
