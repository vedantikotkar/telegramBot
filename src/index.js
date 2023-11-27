const telegramBot=require ('node-telegram-bot-api');
require('dotenv').config();
// const TOKEN=process.env.TOKEN;
const TOKEN="6373761323:AAHjXaSlIMkcn-QeLYy5iSyrs2fRBAw5Unc";
const bot=new telegramBot(TOKEN,{polling:true});
bot.on('message',(message)=>{
    console.log("message");
    console.log(message.text);
    let chat_id=message.from.id;
    bot.sendMessage(chat_id,"hello from vedanti");
    bot.onText(/\/start/, (message) => {
        const chat_id = message.chat.id;
        bot.sendMessage(chat_id, "Welcome to your advanced Telegram bot!");
    });
    
    bot.onText(/\/help/, (message) => {
        const chat_id = message.chat.id;
        bot.sendMessage(chat_id, "Here are the available commands:\n/help - Show help message\n/feature1 - Perform Feature 1");
    });
    
});

