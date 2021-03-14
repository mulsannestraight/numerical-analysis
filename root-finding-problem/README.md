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

A number <img src="https://render.githubusercontent.com/render/math?math=p"> is called a **fixed point** for a given function <img src="https://render.githubusercontent.com/render/math?math=f"> if <img src="https://render.githubusercontent.com/render/math?math=f(p) = p">.

To approximate the fixed point of a function <img src="https://render.githubusercontent.com/render/math?math=f">, we choose a number <img src="https://render.githubusercontent.com/render/math?math=p_0"> as an initial approximation. Then, we generate the sequence <img src="https://render.githubusercontent.com/render/math?math=\{p_n\}_{n=0}^{\infty}"> by letting <img src="https://render.githubusercontent.com/render/math?math=p_n = f(p_{n - 1})">, for each <img src="https://render.githubusercontent.com/render/math?math=n \geq 1">. If the sequence converges to <img src="https://render.githubusercontent.com/render/math?math=p"> and <img src="https://render.githubusercontent.com/render/math?math=f"> is continuous, then

<img src="https://latex.codecogs.com/png.latex?\small&space;p=\lim_{n&space;\to&space;\infty}p_n&space;=&space;\lim_{n&space;\to&space;\infty}&space;f(p_{n-1})&space;=&space;f(\lim_{n&space;\to&space;\infty}&space;p_{n-1})=f(p)">, and a solution to <img src="https://render.githubusercontent.com/render/math?math=x = f(x)"> is found.

### The program usage

The function `fixedPoint()` expect 4 parameters in the following order: an initial approximation <img src="https://render.githubusercontent.com/render/math?math=p_0">, a tolerance number <img src="https://render.githubusercontent.com/render/math?math=T">, the number of iterations, and the function <img src="https://render.githubusercontent.com/render/math?math=f(x)">. `fixedPoint()` returns the approximation number <img src="https://render.githubusercontent.com/render/math?math=p"> at each iteration and a message indicating whether or not the choice of <img src="https://render.githubusercontent.com/render/math?math=f(x)"> can be used in this approximation method.

### Examples

Given that the equation <img src="https://render.githubusercontent.com/render/math?math=x^3 %2B 4x^2 - 10"> has a unique root in <img src="https://render.githubusercontent.com/render/math?math=[1, 2]">, we can approximate the root in the following ways:
**Option 1:** One obvious choice is we can tranfrom <img src="https://render.githubusercontent.com/render/math?math=x^3 %2B 4x^2 - 10"> into <img src="https://render.githubusercontent.com/render/math?math=x = f(x) = \frac{1}{2}(10-x^3)^{1/2}">. By choosing <img src="https://render.githubusercontent.com/render/math?math=p_0 = 1.5"> and <img src="https://render.githubusercontent.com/render/math?math=T = 0.0001"> for 30 iterations, we can write:

```javascript
fixedPoint(1.5, 0.0001, 30, (x) => {
    return (1/2)*((10 - x*x*x)**(1/2));
});
```
The output of this example can be formatted to display the results in the following way:

```
Fixed Point Method:
p1 = 1.5
p2 = 1.286953767623375
p3 = 1.4025408035395783
p4 = 1.3454583740232942
p5 = 1.3751702528160383
p6 = 1.360094192761733
p7 = 1.3678469675921328
p8 = 1.3638870038840212
p9 = 1.36591673339004
p10 = 1.364878217193677
p11 = 1.365410061169957
p12 = 1.3651378206692129
p13 = 1.3652772085244786
p14 = 1.3652058502970472
Approximate solution: 1.3652058502970472
Solution: Found
```

**Option 2:** <img src="https://render.githubusercontent.com/render/math?math=x^3 %2B 4x^2 - 10"> can also be transformed into <img src="https://render.githubusercontent.com/render/math?math=x = f(x) = \left( \frac{10}{x} - 4x \right)^{1/2}">. By choosing <img src="https://render.githubusercontent.com/render/math?math=p_0 = 1.5"> and <img src="https://render.githubusercontent.com/render/math?math=T = 0.0001"> for 30 iterations, we can write:

```javascript
fixedPoint(1.5, 0.0001, 30, (x) => {
    return (10/x - 4*x)**(1/2);
});
```

The output of this example can be formatted to display the results in the following way:

```
Fixed Point Method:
p1 = 1.5
p2 = 0.8164965809277263
p3 = 2.99690880578722
Solution: Method failed before 30 iterations.
```
