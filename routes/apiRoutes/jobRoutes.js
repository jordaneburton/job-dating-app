const router = require('express').Router();
const {
  getFunc,
  postFunc,
  getIdFunc,
  deleteIdFunc,
  getFavFunc,
} = require('../../controllers/jobControllers');


router.route('/')
.get(getFunc)
.post(postFunc);

router.route('/:id')
.delete(deleteIdFunc)
.get(getIdFunc)
.get(getFavFunc);

module.exports = router;
