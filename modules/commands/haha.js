module.exports.config = {
	name: "hahaha",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "Unknown", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 3, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("hahaha")==0 || event.body.indexOf("Hahaha")==0 || event.body.indexOf("HAHAHA")==0 || event.body.indexOf("HEHEHE")==0 || event.body.indexOf("hehehe")==0 || event.body.indexOf("Hehehe")==0 || event.body.indexOf("haha")==0 || event.body.indexOf("bwahahaha")==0 || event.body.indexOf("hhahaha")==0 || event.body.indexOf("wahahahahah")==0 ) { 
		var msg = {
				body: `Hoy beh ${name} nice joke, 10/10 ang rate ko. Maganda yung construction ng joke, gumamit s'ya ng matalinhagang salita para maimpactful 'yung joke n'ya, 'yung delivery at timing solid tol on point talagang hindi mawawala sa joke, madali syang magets ng mga mahihina ang utak at higit pa sa lahat natawa ako 5x, in short perfect joke s'ya. Keep it up malayo mararating mo hanggang kanto. `
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😱", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }