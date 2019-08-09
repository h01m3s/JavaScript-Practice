// Error: Syntax Error, variable needs to be assigned to something.
const foo;

// Error: Syntax Error, variable cannot be re-assigned.
const foo = 'hello';
foo = 'world';

// Block scope
function fn() {

  const foo = 'hello';
  if (true) {
    const foo = 'world';
    console.log(foo);     // print 'world
  }
  console.log(foo);       // print 'hello'

}
