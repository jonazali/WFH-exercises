// Your code here.
function loop(value, test, update, body) {
  // for (let i = 0; i < array.length; i++) {
  //     dosomething();
  // }
  // Be more pure function
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
}

// Sam's Recursion
// Tail Recursion
const loopRecurse = (currValue, testFunc, updateFunc, bodyFunc) => {
  if (testFunc(currValue)) {
    bodyFunc(currValue);
    const newVal = updateFunc(currValue);
    loop(newVal, testFunc, updateFunc, bodyFunc);
  }
};

loop(3, n => n > 0, n => n - 1, console.log);
loopRecurse(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
