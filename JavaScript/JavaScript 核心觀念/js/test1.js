var testValue = 'outer';

function foo() {
  console.log(testValue);		// "outer"
}

function bar() {
  var testValue = 'inner';
  console.log(testValue);
  foo();
}

bar();


