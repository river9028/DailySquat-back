const router = require('express').Router();
const controller = require('../controllers');

router.post('/signin', controller.users.signin);

router.post('/signup', controller.users.signup);

router.post('/signout', controller.users.signout);

router.post('/secession', controller.users.secession);

router.get('/info', controller.users.info);

module.exports = router;
