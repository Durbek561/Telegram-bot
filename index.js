const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Assalomu alaykum! Men sizning yordamchingizman 🤖');
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Buyruqlar:\n/start - Boshlash\n/help - Yordam');
});

bot.on('message', (msg) => {
  if (msg.text && !msg.text.startsWith('/')) {
    bot.sendMessage(msg.chat.id, 'Siz yozdingiz: ' + msg.text);
  }
});
