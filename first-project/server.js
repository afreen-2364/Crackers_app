const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MONGO_URI:", process.env.MONGO_URI);
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
