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
