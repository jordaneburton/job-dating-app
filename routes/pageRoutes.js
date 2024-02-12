const router = require('express').Router();
const { getFunc, 
        getHome, 
        getJobs, 
        getProfile, 
        getLogin 
    } = require('../controllers/pageControllers');
const { withAuth } = require('../utils/helpers');


router.route('/') // POST-PRODUCTION home page router
.get(getFunc);

router.route('/home') // TEMPORARY home page router
.get(getHome)

router.route('/jobs')
.get(getJobs)

router.route('/profile/:id')
.get(getProfile)

router.route('/login')
.get(getLogin)

module.exports = router;