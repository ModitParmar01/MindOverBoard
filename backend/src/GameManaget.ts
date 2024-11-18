import { WebSocket } from "ws";
import { INIT_GAME } from "./message";
import { Game} from "./Game";

export class GameManager{
    private games : Game[];
    private pendingUser : WebSocket;
    private users : WebSocket[];
    
    constructor(){
        this.games = [];
    }

    addUser(socket: WebSocket){
        //add user
        this.users.push(socket);
        this.addHandler(socket);
    }

    removeUser(socket: WebSocket){
        //remove user
    }

    private addHandler(socket: WebSocket){
        socket.on("message", (data) => {
            const msg = JSON.parse(data.toString());
            if(msg.type === INIT_GAME){
                if(this.pendingUser){
                    //start game
                } else{
                    this.pendingUser = socket;
                }
            }
        })
    }
}