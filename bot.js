const discord = require('discord.js');
const bot = new discord.Client();
const key = process.env.ytapikey
const ytdl = require('ytdl-core')
const request = require('request')
const fs = require('fs')
const getYouTubeID = require('get-youtube-id')
const fetchVideoInfo = require('youtube-info')
const controllerrole = ""
//const {baselogger} = require('./logger.js')
bot.version = require('./package.json').version
bot.commands = new discord.Collection()
bot.invite = "https://discordapp.com/api/oauth2/authorize?client_id=446450558585405440&permissions=0&scope=bot"
bot.support = "https://discord.gg/ZWTShWE"
bot.login(process.env.token)
bot.prefix = "b!"
const prefix = bot.prefix

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

bot.on('ready', () => {
  console.log("I'm ready")
  bot.user.setActivity(`for b!help`, {type: "WATCHING"})
})

bot.on('message', message => {
  const mArray = message.content.toLowerCase().split(" ");
  const args = mArray.slice(1)
  const logcmd = mArray[0].slice(prefix.length)
  const cmd = bot.commands.get(logcmd)
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return console.log(new RangeError("Author is bot."));
  if (!message.guild) return console.log(new RangeError("No guild."));
  if (cmd) {
    cmd.run(bot, message, args, key);
    console.log(`${message.author.username} used the ${logcmd} command.`)
    //baselogger(bot, `${message.author.username} used the ${logcmd} command.`, bot.user.avatarURL)
  }
})



