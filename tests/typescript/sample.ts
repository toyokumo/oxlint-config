import { a, NumberArray } from './module.ts';

const doSomething = (_: unknown) => undefined;

doSomething(a);

// typescript/consistent-type-imports (NumberArray is type-only import)
const arr0: NumberArray = [1, 2, 3];
doSomething(arr0);

// typescript/no-explicit-any
const x: any = 1;
doSomething(x);

// typescript/array-type
type SomeArray = Array<number>;
const arr: SomeArray = [1, 2, 3];
doSomething(arr);

// typescript/no-non-null-assertion
const y: string | null = 'hello';
doSomething(y!);

// typescript/no-require-imports
const z = require('node:path');
doSomething(z);

// prefer-const
let w = 1;
doSomething(w);

// typescript/no-empty-object-type
interface Empty {}
const e: Empty = {};
doSomething(e);
