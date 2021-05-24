const telegabot = require('node-telegram-bot-api')
const config = require('./config')
const helper = require('./helper')
const kb = require('./keyboard-buttons')
const keyboard = require('./keyboard')


const bot = new telegabot(config.TOKEN, {polling: true})
console.log('бот почав роботу')

bot.addListener('message', msg => {
    console.log('working')
    if (msg.text === kb.home.favourite) {
        
    } else if (msg.text === kb.home.films) {

    } else if (msg.text === kb.home.cinemas) {
        
    }
})
bot.onText(/\/start/, msg => {
    const text = `Привіт ${msg.from.first_name}. \n Вибери команду для початку роботи`
    bot.sendMessage(helper.getChatId(msg), text, {
        reply_markup: {
            keyboard: keyboard.home
        }
    })
})