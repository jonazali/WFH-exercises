// Flattening
// Use only reduce then concat
// sets.flat()
const arrays = [[1, 2, 3], [4, 5], [6]];
const reducer = (total, current) => total.concat(current);
console.log(arrays.reduce(reducer));
