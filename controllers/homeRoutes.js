const router = require('express').Router();
const path = require("path")
const Workout = require("../models/Workout")
const db = require("../models");

router.get("/", (req, res) => 
 res.sendFile(path.join(__dirname, "../public/index.html"))
);

router.get("/exercise", (req, res) => 
 res.sendFile(path.join(__dirname, "../public/exercise.html"))
);

router.get("/stats", (req, res) => 
 res.sendFile(path.join(__dirname, "../public/stats.html"))
);


module.exports = router;












// router.get("/exercise", (req,res) => {
  
// })

// router.get("/exercise", (req, res) => {
//   db.Exercise.find({})
//     .then(dbBook => {
//       res.json(dbBook);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });


// router.get("/exercise?", (req, res) => {
//   db.Exercise.find({})
//   .sort({ date: -1 })
//     .then(dbBook => {
//       res.json(dbBook);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// router.get("/stats", (req, res) => {
//   db.Exercise.find({})
//     .then(dbBook => {
//       res.json(dbBook);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

