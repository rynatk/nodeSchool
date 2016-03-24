// function doubleAll (numbers) {
//   var result = []
//   for (var i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2)
//   }
//   return result
// }

// convert to Array.map

function doubleAll (numbers) {
  var result = numbers.map(function (i) {
    return i * 2;
  });
  return result;
}

module.exports = doubleAll

// module.exports = function doubleAll(numbers) {
//   return numbers.map(function double(num) {
//     return num * 2
//   })
// }

// close!
