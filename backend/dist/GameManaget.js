"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
const message_1 = require("./message");
class GameManager {
    constructor() {
        this.games = [];
    }
    addUser(socket) {
        //add user
        this.users.push(socket);
        this.addHandler(socket);
    }
    removeUser(socket) {
        //remove user
    }
    addHandler(socket) {
        socket.on("message", (data) => {
            const msg = JSON.parse(data.toString());
            if (msg.type === message_1.INIT_GAME) {
                if (this.pendingUser) {
                    //start game
                }
                else {
                    this.pendingUser = socket;
                }
            }
        });
    }
}
exports.GameManager = GameManager;
