const { countBy, characterScript } = require('./chapter-5-higher-order');
// Dominant Writing Direction
/* Write a function that computes the dominant writing direction in a string of
 * text. Remember that each script object has a direction property that can be
 * "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
 */
function dominantDirection(text) {
  const directions = countBy(text, char => {
    const script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ name }) => name !== 'none');
  // console.log(directions);

  if (directions.length === 0) return 'ltr';

  return directions.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

console.log(dominantDirection('Hello!'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl
