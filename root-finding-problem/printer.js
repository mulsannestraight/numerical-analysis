const print = (object, name) => {
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

export { print };
