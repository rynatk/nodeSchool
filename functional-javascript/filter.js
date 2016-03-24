function getShortMessages (messages) {
    var charLimit = 50;

    return messages.filter(function (msg) {
      return msg['message'].length < charLimit;
    }).map(function (shortMsg) {
      return shortMsg['message'];
    });
}

module.exports = getShortMessages

// module.exports = function getShortMessages(messages) {
//   return messages.filter(function(item) {
//     return item.message.length < 50
//   }).map(function(item) {
//     return item.message
//   })
// }

// pretty good!
