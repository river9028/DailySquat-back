const router = require('express').Router();
const controller = require('../controllers/count');

router.post('/saveCount', controller.count.saveCount);
router.post('/getCount', controller.count.getCount);

module.exports = router;
