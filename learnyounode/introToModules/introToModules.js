// var printFiles = require('./module1.js');
// var directoryArg = process.argv[2];
// var extensionArg = process.argv[3];
//
// printFiles(directoryArg, extensionArg, function(err, files) {
//   if(err) {
//     console.log(err);
//     return;
//   } else {
//     files.forEach(function(item) {
//       console.log(item);
//     });
//   }
// });

console.log('User 1 made a request!');
setTimeout(callback, 5000);

console.log('User 2 made a request!');
setTimeout(callback, 5000);

console.log('User 3 made a request!');
setTimeout(callback, 5000);

function callback () {
  console.log('Queried the database and delivered data in 5 seconds!');
}
