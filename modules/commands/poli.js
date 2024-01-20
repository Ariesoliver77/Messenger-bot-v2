module.exports.config = {
  name: "poli",
  version: "1.0.",
  hasPermssion: 0,
  credits: "Kyle Wu",
  description: "generate image from pollination",
  commandCategory: "image",
  usages: "query",
  cooldowns: 2,
};
module.exports.run = async ({api, event, args }) => {
const axios = require('axios');
const fs = require('fs-extra');
 let { threadID, messageID } = event;
  let query = args.join(" ");
  if (!query) return api.sendMessage("put text/query", threadID, messageID);
let path = __dirname + `/cache/poli.png`;
  const poli = (await axios.get(`https://image.pollinations.ai/prompt/${query}`, {
    responseType: "arraybuffer",
  })).data;
  fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
  api.sendMessage({
    body: "Oh ito na ung nirequest mong image, mabubura yan after 1hour gago.",
    attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
};