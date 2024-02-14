const router = require('express').Router();
const { getFunc, 
        getHome, 
        getJobs, 
        getProfile, 
        getLogin, 
        getSavedJobs
    } = require('../controllers/pageControllers');
const { withAuth } = require('../utils/helpers');


router.route('/') // POST-PRODUCTION home page router
.get(getFunc);

router.route('/home') // TEMPORARY home page router
.get(getHome)

router.route('/jobs')
.get(withAuth, getJobs)

router.route('/profile/:id')
.get(withAuth, getProfile)

router.route('/login')
.get(getLogin)

router.route('/savedJobs')
.get(getSavedJobs)

module.exports = router;