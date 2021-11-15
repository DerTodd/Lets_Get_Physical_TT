const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./controllers')
const PORT = process.env.PORT || 3001;

const db = require("./models");
const { Workout } = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(routes);

//app.post("/submit", ({body}, res) => {
  //const run = new Exercise(body);

//   db.Exercise.create(body)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/books", (req, res) => {
//   db.Exercise.find({})
//     .then(dbBook => {
//       res.json(dbBook);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/submit", (req, res) => {
//   db.Exercise.find({})
//     //.sort({ date: -1 })
//     .then(dbExercise => {
//         alert("I'm working");
//         console.log(dbExercise);
//       res.json(dbExercise);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// app.get("/workouts", (req, res) => {
//   Exercise.find({})
//     .sort({ date: -1 })
//     .then(dbExercise => {
//         alert("I'm working");
//         console.log(dbExercise);
//       res.json(dbExercise);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// // Add a new exercise
// app.put("/workouts", ({ body }, res) => {
//   Exercise.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// // create a workout
// app.post("/workouts", ({ body }, res) => {
//   Exercise.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// app.get("/workouts/range", ({ body }, res) => {
//   Exercise.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });


// app.get("/stats", (req, res) => {
// db.Stats.find({})
// .then(dbStats => {
//     res.json(dbStats);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });









app.listen(PORT, () => {
    console.log(`App Killin it Bro on port ${PORT}!  Visit http://localhost:${PORT}`);
  });