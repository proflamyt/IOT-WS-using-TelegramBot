const Websocket = require('ws');
const wss = new Websocket.Server({ port: 8080 });

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
    
  
wss.on('connection', (ws) => {

    async function  logEvery2Seconds(i) {
        setTimeout( async() => {
            i.send('ok');
            await logEvery2Seconds(i);
        }, 2000)
    }
            
 logEvery2Seconds(ws);
            
          

        
    
})