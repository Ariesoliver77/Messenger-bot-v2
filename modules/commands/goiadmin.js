module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "John Arida",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100056841110357") {
    var aid = ["100056841110357"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Wag mo i ment mommy ko please kung gusto mo pang masikatan ng araw😏, Busy mommy ko pakyu🖕🏻", "Sorry offline sya wag mo hanapin pag wala masasaktan ka lang😿", "Ano kailangan mo sa kanya? pag walang kailangan shutup na🤬","Tawag ka ng tawag sa mommy ko ah my gusto kaba sa kanya ha? tigil tigilan mo kaka ment sa mommy ko hayop ka😈","Want mo masapak? tumigil kana papansin ka masyado bobo😝"];
      api.setMessageReaction("😍", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}