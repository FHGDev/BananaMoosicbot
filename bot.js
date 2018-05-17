const discord = require('discord.js');
const bot = new discord.Client();
const key = process.env.ytapikey
const ytdl = require('ytdl-core')
const request = require('request')
const fs = require('fs')
const getYouTubeID = require('get-youtube-id')
const fetchVideoInfo = require('youtube-info')
const controllerrole = ""
bot.version = require('./package.json').version
bot.commands = new discord.Collection()
bot.invite = "https://discordapp.com/api/oauth2/authorize?client_id=446450558585405440&permissions=0&scope=bot"
bot.support = "https://discord.gg/ZWTShWE"
bot.login(process.env.token)

bot.on('ready', () => {
  console.log("I'm ready")
  bot.user.setActivity(`for b!help`, {type: "WATCHING"})
})



