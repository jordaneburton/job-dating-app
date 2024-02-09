const router = require('express').Router();
const { getFunc } = require('../controllers/homeControllers');


router.route('/')
.get(getFunc);

module.exports = router;