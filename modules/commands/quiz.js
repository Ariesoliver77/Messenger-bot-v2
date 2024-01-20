module.exports.config = {
	name: "quiz",
	version: "1.0.1",
	credits: "Mirai Team mod by Jukie", //mod trans
	hasPermssion: 0,
	description: "Trả lời câu hỏi",
	commandCategory: "Giải trí",
	cooldowns: 5,
	dependencies: {
		"axios": ""
	}
};

module.exports.handleReaction = ({ api, event, handleReaction }) => {
	if (!event.userID == handleReaction.author) return;
	let response = "😠";
	if (event.reaction == "😆") response = "True"
	else response = "False";
	if (response == handleReaction.answer) api.sendMessage("⚡️naka tama ka ring bobo ka lets celebrate!!!", event.threadID);
	else api.sendMessage("⚡️bobo mali sagot mo !!!", event.threadID);
	const indexOfHandle = client.handleReaction.findIndex(e => e.messageID == handleReaction.messageID);
	global.client.handleReaction.splice(indexOfHandle, 1);
	handleReaction.answerYet = 1;
	return global.client.handleReaction.push(handleReaction);
}

module.exports.run = async ({  api, event, args }) => {
	const axios = global.nodemodule["axios"];
	const request = global.nodemodule["request"];	
	let difficulties = ["easy", "medium", "hard"];
	let difficulty = args[0];
	(difficulties.some(item => difficulty == item)) ? "" : difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
	let fetch = await axios(`https://opentdb.com/api.php?amount=1&encode=url3986&type=boolean&difficulty=${difficulty}`);
	if (!fetch.data) return api.sendMessage("⚡️Question could not be found due to a busy server", event.threadID, event.messageID);
	let decode = decodeURIComponent(fetch.data.results[0].question);
	return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=tl&dt=t&q=${decode}`), (err, response, body) => {
	if (err) return api.sendMessage("⚡️An error has occured!", event.threadID, event.messageID);
	var retrieve = JSON.parse(body);
	var text = '';
	retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
	var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
	return api.sendMessage(`⚡Here is the question:\n- ${text}\n\n   : 😆True       😠: False`, event.threadID, async (err, info) => {
		global.client.handleReaction.push({
			name: "quiz",
			messageID: info.messageID,
			author: event.senderID,
			answer: fetch.data.results[0].correct_answer,
			answerYet: 0
		});
		await new Promise(resolve => setTimeout(resolve, 20 * 1000));
		const indexOfHandle = global.client.handleReaction.findIndex(e => e.messageID == info.messageID);
		let data = global.client.handleReaction[indexOfHandle];
		if (data.answerYet !== 1) {
			api.sendMessage(`⚡️Time out!! the correct answer is  ${fetch.data.results[0].correct_answer}`, event.threadID, info.messageID);
			return global.client.handleReaction.splice(indexOfHandle, 1);
		}
		else return;
	});
})
    }