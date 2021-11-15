const router = require('express').Router();
const Exercise = require("../../models/Exercise.js")

const db = require("../../models");


router.post("/submit", ({body}, res) => {
  const run = new Exercise(body);

  db.Exercise.create(run)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

// router.get("/", (req, res) => {
//   db.Exercise.find({})
//     .then(dbBook => {
//       res.json(dbBook);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });


module.exports = router;