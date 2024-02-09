const router = require('express').Router();
const appRoutes = require('./appRoutes');
const jobRoutes = require('./jobRoutes');
const userRoutes = require('./userRoutes');

router.use('/app', appRoutes);
router.use('/job', jobRoutes);
router.use('/user', userRoutes);

module.exports = router;