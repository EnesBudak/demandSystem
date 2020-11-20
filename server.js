const dotenv = require("dotenv");
const app = require("./app");
const http = require("http");

const socketio = require("socket.io");
const server = http.createServer(app);

const io = socketio(server);

io.on("connection", (socket) => {
  console.log("Test");
  socket.emit("message", "Bir kullanıcı bağlandı");
});

app.use(function (req, res, next) {
  req.io = io;
  next();
});
dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");

const DB = process.env.DB_URL;
const PORT = process.env.PORT;
try {
} catch (error) {}
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected DB");
  })
  .catch((err) => console.log(err));

server.listen(PORT, () => {
  console.log(`Sistem : ${PORT}'unda çalışıyor`);
});
