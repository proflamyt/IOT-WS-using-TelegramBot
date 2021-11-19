process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
const Websocket  = require('ws');
const { NlpManager } = require("node-nlp");
const manager = new NlpManager({ languages: ["en"] , nlu: { useNoneFeature: false }});


manager.load();

function olamide(command){
    if (command.includes('tan ino')){
        return {send: true,
            content:"{'state':true, 'component':25}"}
        }
    else if(command.includes('tan fan')){
        return {send:true,
            content: "{'state':true, 'component':26}"}
    }
    else if(command.includes('pa fan')){
        return{send:true,
            content: "{'state':false, 'component':26}"}
    }
    else if(command.includes('pa ino')){
        return {send:true,
            content:"{'state':false, 'component':25}"}
    }
    else{
        return {
            send:false, content:"{'response': res, 'command' : 0}"}
    }
}

const wss = new Websocket.Server({port:8080});
const token = '#token secret';
var response ;
var text = "";
//console.log('start')
const bot = new TelegramBot(token, {polling:true})

bot.on("polling_error", console.log);


bot.on('message', (msg)=>{
    const chatId = msg.chat.id;
    var text = msg.text;
    // Train and save the model.
(async() => {
    
    if (text.toLowerCase().includes('tan')){
       var ola = olamide(text.toLowerCase());
       console.log(ola['content'])
    }
    
    response = await manager.process('en', text);
   // console.log(response)
   if(response){
    bot.sendMessage(chatId,response.answer);
}
    else{
        bot.sendMessage(chatId, 'koyemi o')
    }
})();

    
})

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

wss.on('connection', (ws)=>{
    
  if (typeof ola !== 'undefined'){
      while (True){

    
    ws.send(ola['content']);
     async ()=> await sleep(1000);

    }
      }
})