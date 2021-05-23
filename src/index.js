const telegabot = require('node-telegram-bot-api')
const config = require('./config.js')
const helper = require('./helper.js')

const bot = new telegabot(config.TOKEN, {polling: true})
bot.addListener('message', msg => {
    console.log('working')
    
})