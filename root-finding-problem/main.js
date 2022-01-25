import { print } from './printer.js';
import {
  bisection as bisectionMethod,
  fixedPoint as fixedPointMethod,
  newton as newtonMethod
} from './root-finding-methods.js';

const sin = (x) => Math.sin(x);
const cos = (x) => Math.cos(x);
const tan = (x) => Math.tan(x);
const sqrt = (x) => Math.sqrt(x);
const cbrt = (x) => Math.cbrt(x);
const PI = Math.PI;

let b1 = bisectionMethod(-0.9, 1, 0.0001, 15, (x) => {
  return x * x * sin(x);
});
let b2 = bisectionMethod(-0.9, 1, 0.0001, 15, (x) => {
  return (x * x * sin(x) - x);
});
let b3 = bisectionMethod(-0.9, 1, 0.0001, 15, (x) => {
  return cbrt(x);
});
let f1 = fixedPointMethod(0.1, 0.0001, 30, (x) => {
  return (1 / 2) * (2 * x + x * x * sin(x));
});
let f2 = fixedPointMethod(0.1, 0.0001, 30, (x) => {
  return x * x * sin(x);
});
let f3 = fixedPointMethod(0.1, 0.0001, 30, (x) => {
  return (1 / 2) * (cbrt(x) + 2 * x);
});
let n1 = newtonMethod(0.1, 0.0001, 10, (x) => {
  return x * x * sin(x);
}, (x) => {
  return (2 * x * sin(x) + x * x * cos(x));
});
let n2 = newtonMethod(0.1, 0.0001, 10, (x) => {
  return x * x * sin(x) - x;
}, (x) => {
  return 2 * x * sin(x) + x * x * cos(x) - 1;
});
let n3 = newtonMethod(0.000001, 0.0001, 15, (x) => {
  return cbrt(x);
}, (x) => {
  return 1 / (3 * cbrt(x * x));
});

print(b1, 'Bisection');
print(f1, 'Fixed-point');
print(n1, 'Newton');
print(b2, 'Bisection');
print(f2, 'Fixed-point');
print(n2, 'Newton');
print(b3, 'Bisection');
print(f3, 'Fixed-point');
print(n3, 'Newton');
