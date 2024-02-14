const router = require('express').Router();
const { getHome,  
        getLogin, 
        getSavedJobs
    } = require('../controllers/pageControllers');
const withAuth = require('../utils/helpers');

router.route('/')
.get(getHome)
// .get(withAuth, getHome)

router.route('/login')
.get(getLogin)

router.route('/savedJobs')
.get(getSavedJobs)

module.exports = router;