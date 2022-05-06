// server //
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Working 24/7')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// server //

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
