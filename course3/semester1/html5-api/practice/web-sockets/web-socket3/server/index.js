import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import route from "./route.js";

const app = express();
const PORT = 7878;

app.use(cors({ origin: "*" }));
app.use(route);

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connetion", (socket) => {
  socket.on("join", () => {});
  socket.on("disconnect", () => {
    console.log("Disconnect");
  });
});

server.listen(PORT, () => {
  console.log("Сервер запущен на порту: " + PORT);
});
