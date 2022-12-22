## Home Authomation Using A.I Yoruba Telegram Chat Bot

Ayobol bot is an interactive yoruba bot , that controls home devices using yoruba language . users are able to interact and communicate with the bot . and issue command in real time to devices over the internet.
These devices listens to websocket commands and sends back their states using websockets also.
AN intermediate server sits between the telegram bot and the home automation devices. it handles the communication with the bot using NLP and upon commands, it issues a realtime command to the iot device listening at the other end of the connection.
once the state changes (i.e when the command is carried out). the iot device sends back a state notifying the server a successful response and completion .

This is implemented using node js . a python version can also be seen in one of the repos


It uses websocket for it's communication protocol and a **Device-to-Device** communication mode
