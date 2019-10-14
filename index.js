const TelegramBot = require('node-telegram-bot-api');
// const token = '759487040:AAG_7xUVOtC83Ru6z6kG2AMr4cT2ZasbLAE';
const token = process.env.TGTOKEN

const bot = new TelegramBot(token, { polling: true });

const CHAT_ID = '338073979'

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;

//     bot.sendMessage(chatId, 'Received your message');
// });

// bot.onText(/\/echo (.+)/, (msg, match) => {

//     const chatId = msg.chat.id;
//     const resp = match[1];

//     bot.sendMessage(chatId, resp);
// });


bot.addListener('text', (msg, resp) => {
    console.log(msg.text)
    const myChatId = msg.chat.id

    bot.sendMessage(myChatId, `Hello ${msg.from.first_name} ${msg.from.last_name}, you have entered ${msg.text}`)
})


// bot.on('message', (msg) => {
//     console.log(msg)
// })