 // Your code here.
 function loop(start, test, update, body) {
   //       Start = 3     Start > 0       Start --
    for (let i = start; test(start); start = update(start)) {
      body(start);
    }
  }
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1