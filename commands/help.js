const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let cmds = ["help", "support", "statchange", "activitychange", "8ball", "invite", "meme", "coinflip", "yomomma", "ping", "uptime"];
  let cats = ["Help", "Bot", "Fun"];
  let helpcmds = ["More help", "support", "invite"]
  let botcmds = ["ping", "uptime", "statchange", "activitychange"]
  let funcmds = ["8ball", "meme", "coinflip", "yomomma"]
  let msg = args.join(" ");
  let git = "https://github.com/FHGDev/BananaMoosicbot/tree/view"
  let invite = bot.invite
  let support = bot.support
  let em = new discord.RichEmbed()
  .setTitle("Help Menu")
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`)
  
  if (msg == cats[0].toLowerCase() || msg == cats[0]) {
    em
    .setDescription(`Here is a list of my ${cats[0]} commands.`)
    .addField("Help :question:", `**${helpcmds.join("\n")}**`, true)
    message.channel.send({embed: em})
  }
  
  if (msg == cats[1].toLowerCase() || msg == cats[1]) {
    em
    .setDescription(`Here is a list of my ${cats[1]} commands.`)
    .addField("Bot :robot:", `**${botcmds.join("\n")}**`, true)
    message.channel.send({embed: em})
  }
  
  if (msg == cats[2].toLowerCase() || msg == cats[2]) {
    em
    .setDescription(`Here is a list of my ${cats[2]} commands.`)
    .addField(`Fun :lollipop:`, `**${funcmds.join("\n")}**`, true)
    message.channel.send({embed: em})
  }
  
  if (msg == cmds[0].toLowerCase() || msg == cmds[0]) {
    em
    .setDescription(`Help`)
    .addField(`Usage`, `This command's usage is '${require('./help.js').help.usage}.'`, true)
    .addField(`Info`, `This command's info is '${require('./help.js').help.info}.'`, true)
    message.channel.send({embed: em})
  }
  
  if (msg == cmds[1].toLowerCase() || msg == cmds[1]) {
    em
    .setDescription(`Support`)
    /*.addField(`Usage`, `This command's usage is ${require('./support.js').help.usage}.`, true)
    .addField(`Info`, `This command's info is ${require('./support.js').help.info}.`, true) */
    message.channel.send({embed: em})
  }
  
  if (msg == cmds[2].toLowerCase() || msg == cmds[2]) {
    em
    .setDescription("Statchange")/*
    .addField(`Usage`, `This command's usage is ${require('./changestats.js').help.usage}.`, true)
    .addField(`Info`, `This command's info is ${require('./changestats.js').help.info}.`, true)
    */
    message.channel.send({embed: em})
  }
  
  if (msg == cmds[3].toLowerCase() || msg == cmds[3]) {
    em
    .setDescription("Activitychange")/*
    .addField(`Usage`, `This command's usage is ${require('./changeactivity.js').help.usage}.`, true)
    .addField(`Info`, `This command's info is ${require('./changeactivity.js').help.info}.`, true)
    */
    message.channel.send({embed: em})
  }
  
  if (msg == cmds[4].toLowerCase() || msg == cmds[4]) {
    em
    .setDescription(`8ball`)/*
    .addField(`Usage`, `This command's usage is ${require('./8ball.js').help.usage}.`, true)
    .addField(`Info`, `This command's info is ${require('./8ball.js').help.usage}.`)
    */
    message.channel.send({embed: em})
  }
  
  if (msg == cmds[5].toLowerCase() || msg == cmds[5]) {
    em
    .setDescription("Invite")/*
    .addField(`Usage`, `This command's usage is ${require('./invite.js').help.usage}.`, true)
    .addField(`Info`, `This command's info is ${require('./invite.js').help.info}.`, true)
    */
    message.channel.send({embed: em})
  } 
  
  if (msg == cmds[6] || msg == cmds[6].toLowerCase()) {
    em
    .setDescription(`Meme`)/*
    .addField(`Usage`, `This command's usage is ${require('./meme.js').help.usage}.`, true)
    .addField(`Info`, `This command's info is ${require('./meme.js').help.info}.`, true)
    */
    message.channel.send({embed: em})
  }
  
  if (msg == cmds[7] || msg == cmds[7].toLowerCase()) {
    em
    .setDescription(`Coinflip`)/*
    .addField(`Usage`, `This command's usage is ${require('./coinflip.js').help.usage}.`, true)
    .addField(`Info`, `This command's info is ${require('./coinflip.js').help.info}.`, true)
    */
    message.channel.send({embed: em})
  }
  
  if (msg == cmds[8].toLowerCase() || msg == cmds[8]) {
    em
    .setDescription("Yomomma")/*
    .addField(`Usage`, `This command's usage is ${require('./coinflip.js').help.usage}.`, true)
    .addField(`Usage`, `This command's info is ${require('./coinflip.js').help.info}.`, true)
    */
    message.channel.send({embed: em})
  }
  
  if (msg == cmds[9].toLowerCase() || msg == cmds[9]) {
    em
    .setDescription("Ping")/*
    .addField(`Usage`, `This command's usage is ${require('./ping.js').help.usage}.`, true)
    .addField(`Info`, `This command's info is ${require('./ping.js').help.info}.`, true)
    */
    message.channel.send({embed: em})
  }
  
  if (msg == cmds[10].toLowerCase() || msg == cmds[10]) {
    em
    .setDescription("Uptime")/*
    .addField(`Usage`, `This command's usage is '${require('./uptime.js').help.usage}.'`, true)
    .addField(`Info`, `This command's info is '${require('./uptime.js').help.info}.'`, true)
    */
    message.channel.send({embed: em})
  }
  
  if (!msg) {
    em
    .setDescription("**Use b!help [category] for help on a certain category, or b!help [command] for help on a certain command.**")
    .addField(`Categories`, `**${cats.join("\n")}**`, true)
    .addField(`Links`, `[GitHub](${git}) | [Support](${support})\n[Invite](${invite})`, true)
    message.channel.send({embed: em})
  }
  
}

module.exports.help = {
  name: "help",
  usage: "b!help [category] or [command]",
  info: "get help on certain categories, or commands"
}
