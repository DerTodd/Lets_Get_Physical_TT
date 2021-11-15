const router = require('express').Router();
const { Workout } = require("../../models")
const db = require("../../models");

router.get ("/", async (req, res) => {
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
// Add a new exercise
router.post("/", (req, res) => {
  
  Workout.create({})
  .then(dbexercises => {
    console.log(dbexercises)
      res.json(dbexercises);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.post ("/", async (req, res) => {
//   //console.log(body);
//   const newWorkout = await Workout.create({})
//   console.log(newWorkout)
//   res.json(newWorkout)
// });

router.put ("/:id", async (req, res) => {
  const updateWorkout = await Workout.findByIdAndUpdate(req.params.id,
    {$push: {exercises: req.body}},
    {new: true})
    res.json(updateWorkout)
});


router.get ("/range", async (req, res) => {
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