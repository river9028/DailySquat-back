const router = require('express').Router();
const controller = require('../controllers/count');

router.post('/saveCount', controller.count.addCount);

router.get('/getTotalCount', controller.count.getTotalCount);

router.get('/getRecentCount', controller.count.getRecentCount);


module.exports = router;
