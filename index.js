process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
const Websocket = require('ws');
const { NlpManager } = require("node-nlp");
const manager = new NlpManager({ languages: ["en"], nlu: { useNoneFeature: false } });


manager.load();
var ola = {
    send: true,
    content: "{'state':true, 'component':25}"
};

function olamide(command) {
    if (command.includes('tan ina')) {
        return {
            send: true,
            content: "{'state':true, 'component':25}"
        }
    }
    else if (command.includes('tan fan')) {
        return {
            send: true,
            content: "{'state':true, 'component':26}"
        }
    }
    else if (command.includes('pa fan')) {
        return {
            send: true,
            content: "{'state':false, 'component':26}"
        }
    }
    else if (command.includes('pa ina')) {
        return {
            send: true,
            content: "{'state':false, 'component':25}"
        }
    }
    else {
        return {
            send: false, content: "{'response': res, 'command' : 0}"
        }
    }
}

const wss = new Websocket.Server({ port: 8080 });
const token = '#';
var response;
var text = "";
//console.log('start')
const bot = new TelegramBot(token, { polling: true })

bot.on("polling_error", console.log);


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    var text = msg.text;
    // Train and save the model.
    (async () => {

        if (text.toLowerCase().includes('tan') || text.toLowerCase().includes('pa')  ) {
            ola = olamide(text.toLowerCase());

           console.log(text.toLocaleLowerCase());
        }

        response = await manager.process('en', text);

        if (response.answer) {
            bot.sendMessage(chatId, response.answer);
        }
        else {
            bot.sendMessage(chatId, 'koyemi o')
        }
    })();


})



wss.on('connection', (ws) => {


    if (typeof ola !== 'undefined') {
        async function  logEvery2Seconds(i) {
            setTimeout( async() => {
                i.send(ola['content']);
                await logEvery2Seconds(i);
            }, 2000);
        }
        logEvery2Seconds(ws);
    }
})