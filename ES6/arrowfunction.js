var elements = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

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
  // Decompose
  elements.map(({ length }) => length)
);

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
  }, 1000);
}

var p = new Person();

setInterval(() => {
  console.log(p.age);
}, 5000);
