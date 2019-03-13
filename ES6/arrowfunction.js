var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(
  // Old syntax
  elements.map(function(element) {
    return element.length;
  })
);

console.log(
  // new syntax
  elements.map(element => {
    return element.length;
  })
);

console.log(
  // Or
  elements.map(({ length }) => length)
);
