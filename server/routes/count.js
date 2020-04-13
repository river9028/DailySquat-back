const router = require('express').Router();
const controller = require('../controllers/count');

router.post('/saveCount', controller.count.addCount);

router.get('/getTotalCount/:categoryId', controller.count.getTotalCount);

router.get('/getRecentCount/:categoryId', controller.count.getRecentCount);


module.exports = router;
