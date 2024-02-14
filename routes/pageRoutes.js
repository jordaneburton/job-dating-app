const router = require('express').Router();
const { getHome, 
        putProfile, 
        getLogin, 
        getSavedJobs
    } = require('../controllers/pageControllers');
const withAuth = require('../utils/helpers');

router.route('/') // TEMPORARY home page router
.get(withAuth, getHome)

router.route('/profile/:id')
.put(putProfile)

router.route('/login')
.get(getLogin)

router.route('/savedJobs')
.get(getSavedJobs)

module.exports = router;