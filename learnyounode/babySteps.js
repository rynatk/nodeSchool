// Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).


var consoleCounter = function() {
  var count = 0;
  for(var i=2; i<process.argv.length; i++) {
    count += Number(process.argv[i]);
  };
  console.log(count);
}();
