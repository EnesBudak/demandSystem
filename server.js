const dotenv = require("dotenv");
const app = require("./app");

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

app.listen(PORT, () => {
  console.log(`Sistem : ${PORT}'unda çalışıyor`);
});
