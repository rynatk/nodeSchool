/**
 * Higher order functions take one or more functions as an input,
 * or output functions. All other functions are first-order functions.
 */

 /**
  * Functions are first-class in javascript, meaning they are treated
  * just as any other variable.
  */

function repeat (operation, num) {
  var i = 1;
  while (i < num) {
    operation();
    i++;
  };
}

module.exports = repeat

// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }
//
// module.exports = repeat
