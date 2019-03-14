for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log("var: " + i);
  }, 1000);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log("let: " + i);
  }, 1000);
}

(function() {
  var a = (b = 3);
  // a = undefined
  // b = 3
  // step: 1. b = 3
  // step: 2. a = b
})();

function foo1() {
  return {
    // will return correctly
    bar: "hello"
  };
}

function foo2() {
  return;
  //return
  //{
  // will return undefined
  //bar: "hello"
  //}
}

var foo = function() {
  // function expression
  // do this on runtime
  // dynamic
};

function bar() {
  // function declaration
  // static
}
