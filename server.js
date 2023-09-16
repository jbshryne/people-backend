const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8008;
const peopleController = require("./controllers/peopleController");
const morgan = require("morgan");
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/people", peopleController);

app.listen(PORT, () => console.log("PORT numero", PORT));
