const axios = require('axios');

module.exports.config = {
  name: "tempmail",
  version: "1.0.0",
  hasPermission: 0,
  credits: "RICKCIEL",
  usePrefix: true,
  description: "Generate temporary email.",
  commandCategory: "Utility",
  cooldowns: 2,
};

const TEMP_MAIL_URL = 'https://tempmail-api.codersensui.repl.co/api/gen';

module.exports.run = async ({ api, event }) => {
  try {
    const tempMailResponse = await axios.get(TEMP_MAIL_URL);
    const tempMailData = tempMailResponse.data;

    if (!tempMailData.email) {
      return api.sendMessage("Failed to generate temporary email.", event.threadID);
    }

    api.sendMessage(`📩 Here's your generated temporary email: ${tempMailData.email}`, event.threadID);
  } catch (error) {
    console.error('Error generating temporary email:', error);
    api.sendMessage("An error occurred while generating temporary email.", event.threadID);
  }
};
