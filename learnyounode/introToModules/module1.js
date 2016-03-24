

module.exports = function(directory, extension, callback) {
  var fs = require('fs');
  var path = require('path');
  var files = [];

  fs.readdir(directory, function(err, list) {
    if(err) {
      return callback(err);
    }
    for(var file in list) {
      if(path.extname(list[file]) === extension) {
        files.push(list[file]);
      }
    }
    return callback(null, files);
  });
};
