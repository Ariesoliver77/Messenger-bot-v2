const fs = require("fs");
module.exports.config = {
	name: "tangina",
  version: "1.0.0",
	hasPermssion: 0,
	credits: "kuroro rushirufuru", //do not replace the credits lol 
	description: "no prefix",
	commandCategory: "fun",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL, Users }) {
	var { threadID, messageID } = event;
	var sticker = ["526214684778630"
    ];
    var sticker1 = data[Math.floor(Math.random() * data.length)];
	if (event.body.indexOf("tangina")==0 || (event.body.indexOf("Tangina")==0 || (event.body.indexOf("putangina")==0 || (event.body.indexOf("Putangina")==0)))) {
			api.sendMessage("masama yan kapatid, nakikita ka ng diyos :>", event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker1}, event.threadID);
      }, 100)
    }, event.messageID);
  }
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                                                                }