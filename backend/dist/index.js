"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const GameManaget_1 = require("./GameManaget");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const gameManager = new GameManaget_1.GameManager();
wss.on('connection', function connection(ws) {
    // gameManager.addUser(ws)
    //  ws.on("disconnect", () => gameManager.removeUser(ws))
    ws.send("e4 e5");
});
