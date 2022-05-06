const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
});
config = process.env;
client.on('ready', () => {
  console.log('Ready!')
});
  console.log('Logged in!')
  client.user.setActivity("Nxtlve Development", {type: "WATCHING"})
})
client.login(config.token);
