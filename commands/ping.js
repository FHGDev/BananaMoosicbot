const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let ping = Math.floor(bot.ping)
  let em = new discord.RichEmbed()
  .setTitle("Banana Ping")
  .setDescription(`PONG! My ping is ${ping}ms.`)
  .setFooter(`Requested by ${message.author.username}`)
  .setTimestamp()
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "ping",
  usage: "h!ping",
  info: "get the bots ping"
}
