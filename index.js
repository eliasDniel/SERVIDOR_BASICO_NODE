const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

// NODE SERVER
const server = require("http").createServer(app);
const io = require("socket.io")(server);

require("./sockets/socket")(io);

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

server.listen(process.env.PORT, (error) => {
  if (error) throw Error(error);
  console.log(`Server is running on port ${process.env.PORT}`);
});
