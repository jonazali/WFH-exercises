// Flattening
// Use only reduce then concat
let arrays = [[1,2,3], [4,5], [6]];
const reducer = (total, current) => total.concat(current);
console.log(arrays.reduce(reducer));