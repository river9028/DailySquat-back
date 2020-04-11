const router = require('express').Router();
const controller = require('../controllers/count');

router.post('/saveCount', controller.count.addCount);

router.post('/getCount', controller.count.getCount);

module.exports = router;
