module.exports.run = (bot, message, args) => {
  let cmds = ["help", "ping", "uptime", "8ball"];
  let cats = ["Help", "Bot", "Fun"];
  let msg = args.join(" ");
  let em = new discord.RichEmbed()
  
  if (msg == cats[0].toLowerCase()) {
    
  }
  
}

module.exports.help = {
  name: "help"
}
