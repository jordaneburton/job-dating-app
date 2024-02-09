const router = require('express').Router();
const {
  getFunc,
  postFunc,
} = require('../../controllers/userControllers');


router.route('/')
.get(getFunc)
.post(postFunc);

module.exports = router;
