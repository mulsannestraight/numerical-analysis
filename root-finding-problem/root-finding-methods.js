const bisection = (a, b, tolerance, maxIterations, f) => {
  let i = 1;
  let fa = f(a);
  let p;
  let fp;
  let an = [a];
  let bn = [b];
  let pn = [];

  while (i <= maxIterations) {
    p = a + (b - a) / 2;
    pn.push(p);
    fp = f(p);

    if (fp === 0.0 || ((b - a) / 2) < tolerance) {
      return {
        pn,
        error: Math.abs(bn[bn.length - 1] - an[an.length - 1]),
        solution: 'Found'
      };
    }

    i++;

    if (fa * fp > 0) {
      a = p;
      an.push(a);
      fa = fp;
    } else {
      b = p;
      bn.push(b);
    }
  }

  return {
    pn,
    error: Math.abs(bn[bn.length - 1] - an[an.length - 1]),
    solution: `Method failed after ${ maxIterations } iterations`
  };
};

const fixedPoint = (initialApprox, tolerance, maxIterations, g) => {
  let i = 1;
  let p;
  let pn = [initialApprox];

  while (i <= maxIterations) {
    p = g(initialApprox);

    if (p) {
      pn.push(p);
    }

    if (Math.abs(p - initialApprox) < tolerance) {
      return {
        pn,
        approx: pn[pn.length - 1],
        solution: 'Found'
      };
    }

    i++;
    initialApprox = p;
  }

  return {
    pn,
    approx: pn[pn.length - 1],
    solution: `Method failed after ${ maxIterations } iterations.`
  };
};

const newton = (initialApprox, tolerance, maxIterations, f, fPrime) => {
  let i = 1;
  let p;
  let pn = [initialApprox];

  while (i <= maxIterations) {
    p = initialApprox - (f(initialApprox) / fPrime(initialApprox));

    if (p) {
      pn.push(p);
    }

    if (Math.abs(p - initialApprox) < tolerance) {
      return {
        pn,
        approx: pn[pn.length - 1],
        solution: 'Found'
      };
    }

    i++;
    initialApprox = p;
  }

  return {
    pn,
    approx: pn[pn.length - 1],
    solution: `Method failed after ${ maxIterations } iterations.`
  };
};

export {
  bisection,
  fixedPoint,
  newton
};
