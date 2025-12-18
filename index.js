const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

//DBCONNECTION
require("./databases/config").dbConnection();



//LECTURA Y PARSEO DEL BODY
app.use( express.json() );

// NODE SERVER
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

//RUTAS
app.use("/api/login", require("./routes/auth"));








require("./sockets/socket")(io);



server.listen(process.env.PORT, (error) => {
  if (error) throw Error(error);
  console.log(`Server is running on port ${process.env.PORT}`);
});
