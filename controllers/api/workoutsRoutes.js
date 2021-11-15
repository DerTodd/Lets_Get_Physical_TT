const router = require('express').Router();
const Workout = require("../../models/Workout")
const db = require("../../models");

router.get ("/workouts", async (req, res) => {
  const allWorkouts = await Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration"
        }
      }
    }
  ])
  res.json(allWorkouts)
});

router.post ("/workouts", async (req, res) => {
  const newWorkout = await Workout.create({})
  res.json(newWorkout)
});

router.put ("/workouts/:id", async (req, res) => {
  const updateWorkout = await Workout.findByIdAndUpdate(req.params.id,
    {$push: {exercise: req.body}},
    {new: true})
    res.json(updateWorkout)
});


router.get ("/workouts/range", async (req, res) => {
const allWorkouts = await Workout.aggregate([
  {
    $addFields: {
      totalDuration: {
        $sum: "$exercises.duration"
      }
    }
  }
]).sort({_id: -1}).limit(7)
res.json(allWorkouts)
})

module.exports = router;


// router.get("/:id", (req, res) => {
//   db.Workout.find({})
//   .then(dbexercises => {
//     res.json(dbexercises);
//   })
//   .catch(err => {
//       res.status(400).json(err);
//   });
// });

// router.put("/:id", (req, res) => {
//     db.Exercise.findByIdAndUpdate(req.params.id)
//     .then(dbexercises => {
//       res.json(dbexercises);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });
  
//   // Add a new exercise
//   router.put("/", ({ body }, res) => {
//     db.Exercise.create(body)
//     .then(dbexercises => {
//         res.json(dbexercises);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  
//   // create a workout
//   router.post("/", ({ body }, res) => {
//     db.Exercise.create(body)
//     .then(dbexercises => {
//         res.json(dbexercises);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  
//   router.get("/range", ({ body }, res) => {
//     db.Exercise.find({})
//     .then(dbexercises => {
//       res.json(dbexercises);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });
  




module.exports = router;