const router = require('express').Router();
module.exports = router;

router.use('/contacts', require('./contacts'));
router.use('/search', require('./search'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
