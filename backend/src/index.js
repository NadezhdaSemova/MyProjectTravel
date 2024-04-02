const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

const app = express();
const PORT = 3030;


mongoose
  .connect("mongodb://127.0.0.1:27017/travelers")
  .then(() => console.log(`Successfully connected to the DB!`))
  .catch((err) => console.log(`Error while connecting to the DB!`, err));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}));
app.use(auth);

app.get("/", (req, res, next) => {
  res.send("Hello from RESTful API!");
});

app.use(routes);

app.listen(PORT, () => console.log(`Server is listenting on port ${PORT}...`));
