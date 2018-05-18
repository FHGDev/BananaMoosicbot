const Music = require("discord.js-musicbot-addon")
const ffmpeg = require('ffmpeg')

module.exports.run = (bot, message, args) => {
  Music.start(bot, { 
    prefix: bot.prefix,
    leaveHelp: "Nooooes rip me.",
    helpCmd: bot.commands.get('help').run(bot, message, args),
    maxQueueSize: 10,
    disableLoop: false,
    botOwner: "242734840829575169",
    youtubeKey: process.env.ytapikey
  })
}

module.exports.help = {
  name: "play",
  usage: "b!play [song name] or b!play [song link]",
  info: "Play some sw33t tunes"
}
