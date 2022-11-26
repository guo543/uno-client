import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

var playerId;

socket.on("connect", () => {
    console.log(socket.id);
    playerId = socket.id;
});

export default socket;
export { playerId };