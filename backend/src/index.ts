import { Socket } from "socket.io";

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const port: number = 8080;

const app = express();
const server = http.createServer(app);


app.use(cors({
    origin: "http://localhost:5173"
}))


const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});



io.on("connection", (socket: Socket) => {
    console.log("A new user connected with id " + socket.id + "\r");
    socket.emit("setUserId", socket.id);
})


server.listen(port, () => {
    console.log("Server started at port: ", port);
})