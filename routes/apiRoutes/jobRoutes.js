const router = require('express').Router();
const {
  getFunc,
  postFunc,
  deleteFunc,
} = require('../../controllers/jobControllers');


router.route('/')
.get(getFunc)
.post(postFunc);

router.route('/:id')
.delete(deleteFunc)

module.exports = router;
