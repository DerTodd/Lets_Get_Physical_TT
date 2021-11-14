const router = require('express').Router();
const Exercise = require("../models/Exercise.js")
const db = require("../models");


router.get("/", (req, res) => {
  db.Exercise.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/exercise", (req, res) => {
  db.Exercise.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});


router.get("/exercise?", (req, res) => {
  db.Exercise.find({})
  .sort({ date: -1 })
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/stats", (req, res) => {
  db.Exercise.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;