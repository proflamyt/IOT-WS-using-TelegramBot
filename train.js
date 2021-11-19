const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en'],  nlu: { useNoneFeature: false } });
// Adds the utterances and intents for the NLP

//words intents
manager.addDocument('en', 'odabo', 'greetings.bye');
manager.addDocument('en', 'odigba o', 'greetings.bye');
manager.addDocument('en', 'odaaro', 'greetings.bye');
manager.addDocument('en', 'kale', 'greetings.bye');
manager.addDocument('en', 'ku ojumo', 'greetings.bye');
manager.addDocument('en', 'ku iyaleta', 'greetings.bye');
manager.addDocument('en', 'bawoni', 'greetings.hello');
manager.addDocument('en', 'se daada ni', 'greetings.hello');
manager.addDocument('en', 'haaro', 'greetings.hello');
manager.addDocument('en', 'Bawo ni o se wa?', 'greetings.hello');
manager.addDocument('en', 'Bawo ni nibe yen o', 'greetings.hello');
manager.addDocument('en', 'tan ina', 'command.light');
manager.addDocument('en', 'pa ina', 'command.light');
manager.addDocument('en', 'tan imole', 'command.light');
manager.addDocument('en', 'pa imole', 'command.light');
manager.addDocument('en', 'tan fan', 'command.fan');
manager.addDocument('en', 'pa fan', 'command.fan');
manager.addDocument('en', 'pa aifefe', 'command.fan');
manager.addDocument('en', 'tan aifefe', 'command.fan');
manager.addDocument('en', 'omo odun melo ni e?', 'smalltalk.age');
manager.addDocument('en', 'nigba wo ni ojo ibi re?', 'smalltalk.age');
manager.addDocument('en', 'Nigbawo ni wọn bi ọ?', 'smalltalk.age',);

//intents word
// Train also the NLG
manager.addAnswer('en', 'greetings.bye', 'odi gba');
manager.addAnswer('en', 'greetings.bye', 'odaaro');
manager.addAnswer('en', 'greetings.hello', 'pele o');
manager.addAnswer('en', 'greetings.hello', 'igbadun');
manager.addAnswer('en', 'greetings.hello', 'Pẹlẹ o bawo ni');
manager.addAnswer('en', 'greetings.bye', 'inu mi dun ati ba e soro');
manager.addAnswer('en', 'greetings.hello', 'kini mole shey fun e');
manager.addAnswer('en', 'greetings.bye', 'Ma a ri e laipe');
manager.addAnswer('en', 'greetings.bye', 'nigbamii');
manager.addAnswer('en', 'greetings.bye', 'titi a o tun pade');
manager.addAnswer('en', 'command.fan', 'fan ti wa ni pipade');
manager.addAnswer('en', 'command.fan', 'mo ti pa fan');
manager.addAnswer('en', 'command.fan', 'mo ti tan fan');    
manager.addAnswer('en', 'command.light', 'ina ti tan');
manager.addAnswer('en', 'command.light', 'mo ti pa ina naa');
manager.addAnswer('en', 'smalltalk.age', 'omo odun merinlelogun ni mi');
manager.addAnswer('en', 'smalltalk.age', 'A bi mi ni ọdun 1996');

// Train and save the model.
(async() => {
    await manager.train();
    manager.save();
    const response = await manager.process('en', 'tan ino');
    console.log(response);
})();