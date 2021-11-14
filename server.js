const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./controllers')
const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(routes);

app.get("/stats", (req, res) => {
db.Stats.find({})
.then(dbStats => {
    res.json(dbStats);
  })
  .catch(err => {
    res.json(err);
  });
});









app.listen(PORT, () => {
    console.log(`App Killin it Bro on port ${PORT}!  Visit http://localhost:${PORT}`);
  });