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

router.get("/", (req, res) => {
  db.Exercise.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/workouts", (req, res) => {
  db.Exercise.find({})
    .sort({ date: -1 })
    .then(dbExercise => {
        alert("I'm working");
        console.log(dbExercise);
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Add a new exercise
router.put("/workouts", ({ body }, res) => {
  db.Exercise.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// create a workout
router.post("/workouts", ({ body }, res) => {
  db.Exercise.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workouts/range", ({ body }, res) => {
  db.Exercise.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.delete('/:id', async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;