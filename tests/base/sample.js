import { a } from './module.js';
import { b } from './module.js';
import { nonExistent } from './module.js';

const doSomething = (_) => undefined;

doSomething(a);
doSomething(b);
doSomething(nonExistent);

// no-constant-condition
if (true) {
  doSomething(1);
}

// no-debugger
debugger;

// no-empty
try {
  doSomething(1);
} catch (e) {}

// no-var
var x = 1;
doSomething(x);

// no-console
console.log('test');

// eqeqeq
if (a == 1) {
  doSomething(1);
}

// no-eval
eval('1');

// arrow-body-style
const f = () => {
  return 1;
};
doSomething(f());

// no-useless-constructor
class A {
  constructor() {}
}
doSomething(new A());

// object-shorthand
const c = 1;
const d = { c: c };
doSomething(d);

// no-shadow
let err = 'x';
try {
  doSomething(err);
} catch (err) {
  doSomething(err);
}

// no-param-reassign
const f3 = (bar) => {
  bar = 13;
  return bar;
};
doSomething(f3(5));

// no-restricted-exports
export { a as default } from './module.js';
export { b as then } from './module.js';

// no-useless-rename
const a1 = { a2: 0 };
const { a2: a2 } = a1;
doSomething(a2);

// no-useless-concat
const str = 'a' + 'b';
doSomething(str);

// no-useless-return
function f4() {
  doSomething(1);
  return;
}
f4();

// guard-for-in
for (const key in { a: 1 }) {
  doSomething(key);
}

// no-new-wrappers
const s = new String('hello');
doSomething(s);
