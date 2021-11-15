const router = require('express').Router();
//const exerciseRoutes = require('./exerciseRoutes');
const workoutsRoutes = require('./workoutsRoutes');

//router.use('/exercise', exerciseRoutes);
router.use('/workouts', workoutsRoutes);

module.exports = router;