const router = require('express').Router();
const {
  getFunc,
  postFunc,
} = require('../../controllers/userControllers');

const withAuth  = require('../../utils/helpers');


router.route('/')
.get(withAuth, getFunc)
.post(postFunc);

router.route('/login')
.post(loginFunc);



module.exports = router;
