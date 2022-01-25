const sin = (x) => Math.sin(x);
const cos = (x) => Math.cos(x);
const tan = (x) => Math.tan(x);
const sqrt = (x) => Math.sqrt(x);
const cbrt = (x) => Math.cbrt(x);
const PI = Math.PI;

const printer = (object, name) => {
  console.log(`${ name } Method:`);

  for (let i = 0; i < object.pn.length; i++) {
    console.log(`p${ i + 1 } = ${ object.pn[i] }`);
  }

  if (object.error) {
    console.log(`Error: ${ object.error }`);
  }

  if (object.approx) {
    console.log(`Approximate solution: ${ object.approx }`);
  }

  console.log(`Solution: ${ object.solution }\n`);
};

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

let b1 = bisection(-0.9, 1, 0.0001, 15, (x) => {
  return x * x * sin(x);
});
let b2 = bisection(-0.9, 1, 0.0001, 15, (x) => {
  return (x * x * sin(x) - x);
});
let b3 = bisection(-0.9, 1, 0.0001, 15, (x) => {
  return cbrt(x);
});
let f1 = fixedPoint(0.1, 0.0001, 30, (x) => {
  return (1 / 2) * (2 * x + x * x * sin(x));
});
let f2 = fixedPoint(0.1, 0.0001, 30, (x) => {
  return x * x * sin(x);
});
let f3 = fixedPoint(0.1, 0.0001, 30, (x) => {
  return (1 / 2) * (cbrt(x) + 2 * x);
});
let n1 = newton(0.1, 0.0001, 10, (x) => {
  return x * x * sin(x);
}, (x) => {
  return (2 * x * sin(x) + x * x * cos(x));
});
let n2 = newton(0.1, 0.0001, 10, (x) => {
  return x * x * sin(x) - x;
}, (x) => {
  return 2 * x * sin(x) + x * x * cos(x) - 1;
});
let n3 = newton(0.000001, 0.0001, 15, (x) => {
  return cbrt(x);
}, (x) => {
  return 1 / (3 * cbrt(x * x));
});

printer(b1, 'Bisection');
printer(f1, 'Fixed-point');
printer(n1, 'Newton');
printer(b2, 'Bisection');
printer(f2, 'Fixed-point');
printer(n2, 'Newton');
printer(b3, 'Bisection');
printer(f3, 'Fixed-point');
printer(n3, 'Newton');
