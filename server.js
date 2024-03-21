import express from 'express';
import {Server} from "socket.io"
import http from "http";

const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = new Server(server);

app.get("/",(req,res)=>{
res.send("Hello guys");
})

io.on("connection",(socket)=>{
console.log("Socket connected "+socket.id);
})

server.listen(PORT, () => console.log(`Server running at ${PORT}`));
