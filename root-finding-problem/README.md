# The root-finding problem 

This program attempts to find a root (a solution) of an equation of the form
<img src="https://render.githubusercontent.com/render/math?math=f(x) = 0"> for any given function
<img src="https://render.githubusercontent.com/render/math?math=f">
by using three
numerical analysis approximation methods. Those methods include:

1. The Bisection (Binary-search) method
2. The Fixed-point iteration method
3. The Newton's method

## The Bisection method
### The algorithm

Let <img src="https://render.githubusercontent.com/render/math?math=f"> be a continuous function on 
<img src="https://render.githubusercontent.com/render/math?math=[a, b]"> with 
<img src="https://render.githubusercontent.com/render/math?math=f(a)"> and 
<img src="https://render.githubusercontent.com/render/math?math=f(b)"> of opposite sign. Then, there exists a number
<img src="https://render.githubusercontent.com/render/math?math=p"> in 
<img src="https://render.githubusercontent.com/render/math?math=(a, b)"> such that
<img src="https://render.githubusercontent.com/render/math?math=f(p) = 0">. The Bisection method tries to find an
interval that contains this <img src="https://render.githubusercontent.com/render/math?math=p"> by repeatedly
halving the sub-intervals of <img src="https://render.githubusercontent.com/render/math?math=[a, b]">.

Let <img src="https://render.githubusercontent.com/render/math?math=a_1 = a"> and
<img src="https://render.githubusercontent.com/render/math?math=b_1 = b"> and
<img src="https://render.githubusercontent.com/render/math?math=p_1 = (a_1 %2B b_1)/2">.

- If <img src="https://render.githubusercontent.com/render/math?math=f(p_1) = 0">, then the root <img src="https://render.githubusercontent.com/render/math?math=p = p_1">.
- If <img src="https://render.githubusercontent.com/render/math?math=f(p_1) \neq 0">, then <img src="https://render.githubusercontent.com/render/math?math=f(p_1)"> has the same sign as either <img src="https://render.githubusercontent.com/render/math?math=f(a_1)"> or <img src="https://render.githubusercontent.com/render/math?math=f(b_1)">.
  - If <img src="https://render.githubusercontent.com/render/math?math=f(p_1)"> and <img src="https://render.githubusercontent.com/render/math?math=f(a_1)"> have the same sign, <img src="https://render.githubusercontent.com/render/math?math=p \in (p_1, b_1)">. Then, we let <img src="https://render.githubusercontent.com/render/math?math=a_2 = p_1"> and <img src="https://render.githubusercontent.com/render/math?math=b_2 = b_1">.
  - If <img src="https://render.githubusercontent.com/render/math?math=f(p_1)"> and <img src="https://render.githubusercontent.com/render/math?math=f(a_1)"> have oppisite sign, <img src="https://render.githubusercontent.com/render/math?math=p \in (a_1, p_1)">. Then, we let <img src="https://render.githubusercontent.com/render/math?math=a_2 = a_1"> and <img src="https://render.githubusercontent.com/render/math?math=b_2 = p_1">.

Continue to reapply the steps above to interval <img src="https://render.githubusercontent.com/render/math?math=[a_2, b_2]"> until the number <img src="https://render.githubusercontent.com/render/math?math=p">
is found with a desirable tolerance.

We use a tolerance number <img src="https://render.githubusercontent.com/render/math?math=T"> to stop the procedure when one of these conditions is met:
<img src="https://render.githubusercontent.com/render/math?math=f(p) = 0"> or
<img src="https://render.githubusercontent.com/render/math?math=(b - a)/2 < T">. To prevent the program from entering an infinite loop &mdash; which can happen when the sequence diverges &mdash; we set an upper bound on the number of iterations.

### The program usage

The function `bisection()` expects 5 parameters in the following order: the number <img src="https://render.githubusercontent.com/render/math?math=a">, the number <img src="https://render.githubusercontent.com/render/math?math=b">, the tolerance <img src="https://render.githubusercontent.com/render/math?math=T">, the number of iterations, and the function <img src="https://render.githubusercontent.com/render/math?math=f(x)">. `bisection()` returns the number <img src="https://render.githubusercontent.com/render/math?math=p"> at each iteration, and the error number at the end of the program, given that the function <img src="https://render.githubusercontent.com/render/math?math=f(x) = 0"> has a unique solution in the interval <img src="https://render.githubusercontent.com/render/math?math=[a, b]">

### Examples

To find an approximate solution to <img src="https://render.githubusercontent.com/render/math?math=f(x) = x^3 %2B 4x^2 - 10"> on the interval <img src="https://render.githubusercontent.com/render/math?math=[1, 2]"> with tolerance <img src="https://render.githubusercontent.com/render/math?math=T = 0.0001"> for 15 iterations, we write:

```javascript
bisection(1, 2, 0.0001, 15, (x) => {
  return x*x*x + 4*x*x - 10;
});
```
The output of `bisection()` can be formatted to show the results in the following way:

```
p1 = 1.5
p2 = 1.25
p3 = 1.375
p4 = 1.3125
p5 = 1.34375
p6 = 1.359375
p7 = 1.3671875
p8 = 1.36328125
p9 = 1.365234375
p10 = 1.3642578125
p11 = 1.36474609375
p12 = 1.364990234375
p13 = 1.3651123046875
p14 = 1.36517333984375
Error: 0.0001220703125
Solution: Found
```

## The Fixed-point iteration method
### The algorithm
